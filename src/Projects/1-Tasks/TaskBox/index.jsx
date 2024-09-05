import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function TaskBox({
  type = "add",
  setTasks,
  tasks,
  closeTaskBox,
  updateTaskData = false,
}) {
  const status = ["Incomplate", "Draft", "Complated"];
  const [myTaskData, setMyTaskData] = useState({
    activeStatusIndex: 0,
    task_title: "",
    task_desc: "",
    id: nanoid(),
  });
  useEffect(() => {
    if (type === "update") {
      setMyTaskData(updateTaskData);
    }
  }, [type]);
  useEffect(() => {
    document.querySelector("html").style.overflowY = "hidden";

    const handleEsc = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) closeTaskBox();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const addTask = () => {
    setTasks([myTaskData, ...tasks]);
    closeTaskBox();
  };

  const updateTask = () => {
    // const updatedTask = tasks.filter((t) => t.id === myTaskData.id);
    tasks.forEach((task) => {
      if (task.id === myTaskData.id) {
        task.task_title = myTaskData.task_title;
        task.task_desc = myTaskData.task_desc;
        task.activeStatusIndex = myTaskData.activeStatusIndex;
      }
    });
    setTasks(tasks);
    closeTaskBox();
  };

  const formSubmit = (e) => {
    e.preventDefault();
    switch (type) {
      case "add":
        addTask();
        break;
      case "update":
        updateTask();
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      id="task-main"
      onClick={(e) => e.target.id === "task-main" && closeTaskBox()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex z-20 items-center justify-center bg-black bg-opacity-20 w-full h-screen fixed left-0 top-0"
    >
      <form
        onSubmit={formSubmit}
        className="w-[800px] h-auto p-5 bg-slate-600 rounded-lg flex flex-col gap-2.5"
      >
        <div className="flex items-center justify-between mb-2.5">
          <header className="text-3xl font-medium bg-gradient-to-r to-slate-200 from-slate-400 px-5 h-12 flex items-center justify-center rounded-lg">
            {type === "add" ? "Add" : "Update"} Task
          </header>
          <button
            type="button"
            onClick={closeTaskBox}
            className="bg-gradient-to-br to-black from-gray-800 text-white border-2 border-solid border-gray-600 hover:border-white h-10 w-24 rounded-lg duration-200"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-start">
            <header className="text-2xl font-medium text-white relative">
              Title
              <span className="absolute h-[3px] w-1/3 rounded-full left-1 -bottom-[3px] bg-slate-400"></span>
            </header>
          </div>
          <input
            value={myTaskData.task_title}
            onChange={(e) =>
              setMyTaskData({ ...myTaskData, task_title: e.target.value })
            }
            className="bg-gradient-to-tr to-black from-slate-800 text-white h-14 px-2.5 rounded-lg border-[1px] border-solid border-transparent focus:border-slate-500 duration-200"
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <header className="text-2xl font-medium text-white relative">
              Description
              <span className="absolute h-[3px] w-1/3 rounded-full left-1 -bottom-[3px] bg-slate-400"></span>
            </header>
            <div className="flex gap-1.5 text-slate-300 font-medium">
              {myTaskData.task_desc.length} / 10000
            </div>
          </div>
          <textarea
            value={myTaskData.task_desc}
            onChange={(e) =>
              setMyTaskData({ ...myTaskData, task_desc: e.target.value })
            }
            maxLength={10000}
            className="bg-gradient-to-tr to-black from-slate-800 text-white h-36 p-2.5 rounded-lg border-[1px] border-solid border-transparent focus:border-slate-500 duration-200 resize-none overflow-y-auto"
            type="text"
            placeholder="Enter Description"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-start">
            <header className="text-2xl font-medium text-white relative">
              Status
              <span className="absolute h-[3px] w-1/3 rounded-full left-1/2 -translate-x-1/2 -bottom-[3px] bg-slate-400"></span>
            </header>
          </div>
          <div className="grid grid-cols-3 gap-2.5 h-14">
            {status.map((s, i) => (
              <button
                type="button"
                onClick={() =>
                  setMyTaskData({ ...myTaskData, activeStatusIndex: i })
                }
                className={classNames(
                  "bg-gradient-to-tr to-black from-slate-800 text-white h-14 px-2.5 rounded-lg border-2 border-solid border-slate-500 duration-200 opacity-60 hover:opacity-80",
                  {
                    "!border-blue-500 !text-blue-300 !opacity-100 !pointer-events-none":
                      i === myTaskData.activeStatusIndex,
                  }
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="h-1 opacity-50 mt-5 bg-slate-400 bg-opacity-50 rounded-sm"></div>
        <div className="flex items-center gap-2.5 mt-2.5">
          {type === "add" && (
            <button
              type="submit"
              disabled={myTaskData.task_title.trim().length === 0}
              className={classNames(
                "text-white h-12 w-36 rounded-lg text-base font-medium duration-200 disabled:pointer-events-none disabled:opacity-60 bg-blue-600 hover:!bg-blue-700"
              )}
            >
              Add the Task
            </button>
          )}
          {type === "update" && (
            <button
              type="submit"
              className={classNames(
                "text-white h-12 w-36 rounded-lg text-base font-medium duration-200 disabled:pointer-events-none disabled:opacity-60 bg-teal-600 hover:!bg-teal-700"
              )}
            >
              Update the Task
            </button>
          )}
          <button
            type="button"
            onClick={closeTaskBox}
            className="bg-black text-slate-300 hover:text-white h-12 w-24 rounded-lg duration-200"
          >
            Close
          </button>
        </div>
      </form>
    </motion.div>
  );
}
