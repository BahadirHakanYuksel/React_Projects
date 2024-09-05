import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AlertBox({
  taskId = "",
  taskTitle = "",
  taskDesc = "",
  tasks,
  setTasks,
  type = "del",
  closeAlertBox,
}) {
  useEffect(() => {
    document.querySelector("html").style.overflowY = "hidden";

    const handleEsc = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) closeAlertBox();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const deleteTask = () => {
    if (type === "del") {
      const newTasksAfterDeletedOneTask = tasks.filter(
        (task) => task.id !== taskId
      );
      setTasks(newTasksAfterDeletedOneTask);
    } else if (type === "allDel") {
      setTasks([]);
    }
    closeAlertBox();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="fixed left-0 top-0 bg-slate-950 bg-opacity-30 w-full h-screen flex items-center justify-center z-20"
    >
      <div
        className={classNames(
          "h-auto p-5 bg-slate-600 rounded-lg flex flex-col gap-5",
          {
            "w-[500px]": type === "allDel",
          },
          {
            "w-[800px]": type === "del",
          }
        )}
      >
        <header className="text-4xl font-medium text-slate-300">
          {type === "del" && "Are you sure you want to delete this task?"}
          {type === "allDel" &&
            "Are you sure you want to delete all the tasks?"}
        </header>
        {type === "del" && (
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center p-5 gap-3.5 bg-gradient-to-tr to-slate-900 from-black rounded-lg">
              <header className="text-base font-medium text-slate-200 relative">
                Title{" "}
                <div className="absolute w-[3px] h-1/2 -right-2 top-1/2 -translate-y-1/2 bg-gray-600 rounded-full"></div>
              </header>
              <span className="text-base text-white">{taskTitle}</span>
            </div>
            <div className="flex items-start p-5 gap-3.5 bg-gradient-to-tr to-slate-900 from-black rounded-lg overflow-y-auto">
              <header className="text-base sticky top-0 left-0 font-medium text-slate-200">
                Description
                <div className="absolute w-[3px] h-1/2 -right-2 top-1/2 -translate-y-1/2 bg-gray-600 rounded-full"></div>
              </header>

              <p className="text-base text-white max-h-36">
                {taskDesc.length > 0 ? taskDesc : "Description not found!"}
              </p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={deleteTask}
            className="h-12 flex items-center justify-center text-base font-medium text-white rounded-lg bg-black hover:bg-red-800 duration-200"
          >
            Delete
          </button>
          <button
            onClick={closeAlertBox}
            className="h-12 flex items-center justify-center text-base font-medium text-white rounded-lg bg-gray-800 hover:bg-gray-900 duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
}
