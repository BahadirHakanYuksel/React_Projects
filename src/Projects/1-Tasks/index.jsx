import classNames from "classnames";
import React, { useEffect, useState } from "react";
import TaskBox from "./TaskBox";
import { AnimatePresence, motion } from "framer-motion";
import "../../Css_Files/1-Tasks.css";

export default function Tasks() {
  const filter_list = ["All", "Incomplate", "Draft", "Complated"];
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [taskBoxIsOpen, setTaskBoxIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [type, setType] = useState("add");
  const [updateTaskData, setUpdateTaskData] = useState(false);
  const statusBar = [0, 1, 2];
  const [changeStatus, setChangeStatus] = useState(false);

  useEffect(() => {
    document.querySelector("html").style.overflowY = "auto";
    JSON.parse(localStorage.getItem("bhy-tasks")) !== null &&
      setTasks(JSON.parse(localStorage.getItem("bhy-tasks")));
  }, []);

  const changeFilter = (index) => {
    setActiveFilterIndex(index);
  };

  const closeTaskBox = () => {
    setTaskBoxIsOpen(false);
    document.querySelector("html").style.overflowY = "auto";
  };

  useEffect(() => {
    setActiveFilterIndex(0);
    setFilteredTasks(tasks);
    localStorage.setItem("bhy-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (activeFilterIndex !== 0) {
      const newFilteredList = tasks.filter(
        (task) => task.activeStatusIndex === activeFilterIndex - 1
      );
      setFilteredTasks(newFilteredList);
    } else {
      setFilteredTasks(tasks);
    }
  }, [activeFilterIndex]);

  const updateStatus = (index, id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.activeStatusIndex = index;
      }
    });
    setTasks(tasks);
    setActiveFilterIndex(0);
    setChangeStatus(!changeStatus);
  };

  const deleteTask = (id) => {
    const newTasksAfterDeletedOneTask = tasks.filter((task) => task.id !== id);
    setTasks(newTasksAfterDeletedOneTask);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
    localStorage.setItem("bhy-tasks", JSON.stringify(tasks));
  }, [changeStatus]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-10 p-16 items-center relative"
    >
      <AnimatePresence>
        {taskBoxIsOpen && (
          <TaskBox
            type={type}
            setTasks={setTasks}
            tasks={tasks}
            closeTaskBox={closeTaskBox}
            updateTaskData={updateTaskData}
          />
        )}
      </AnimatePresence>
      <header className="text-5xl font-medium text-slate-200">TASK LIST</header>
      <div className="w-[800px] flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setType("add");
              setTaskBoxIsOpen(true);
            }}
            className="text-lg font-medium bg-blue-600 hover:bg-indigo-600 rounded-lg h-12 w-32 text-white duration-200 shadow-xl shadow-slate-800"
          >
            Add Task
          </button>
          <div className="h-12 flex">
            {filter_list.map((myFilter, i) => (
              <button
                onClick={() => changeFilter(i)}
                key={i}
                className={classNames(
                  "h-full px-5 border-b-2 border-solid border-b-gray-900 text-gray-500 hover:text-gray-400 text-lg duration-200",
                  {
                    "!text-white !border-b-white": i === activeFilterIndex,
                  }
                )}
              >
                {myFilter}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {filteredTasks.length > 0 &&
            filteredTasks.map((task, i) => (
              <div
                key={i}
                className={classNames(
                  "task w-full h-14 rounded-lg !text-white bg-slate-400 bg-opacity-20 flex items-center justify-between px-3"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div className="grid grid-cols-3 gap-1.5 p-1.5 h-10">
                    {statusBar.map((st) => (
                      <button
                        onClick={() => updateStatus(st, task.id)}
                        className={classNames(
                          "h-full w-5 border-2 border-solid border-gray-400 rounded-lg bg-transparent hover:bg-gray-300 hover:bg-opacity-20 duration-200",
                          {
                            "!border-red-600 !bg-red-600":
                              st <= task.activeStatusIndex &&
                              task.activeStatusIndex === 0,
                          },
                          {
                            "!border-orange-400 !bg-orange-400":
                              st <= task.activeStatusIndex &&
                              task.activeStatusIndex === 1,
                          },
                          {
                            "!border-green-500 !bg-green-500":
                              st <= task.activeStatusIndex &&
                              task.activeStatusIndex === 2,
                          }
                        )}
                      ></button>
                    ))}
                  </div>
                  <span>{task.task_title}</span>
                </div>
                <div className="flex items-center gap-2.5 taskButtons duration-500">
                  <button
                    onClick={() => {
                      setType("update");
                      setUpdateTaskData(task);
                      setTaskBoxIsOpen(true);
                    }}
                    className="flex items-center justify-center bg-slate-500 p-2.5 rounded-lg text-indigo-300 hover:text-indigo-500 hover:bg-slate-700 shadow-lg duration-200"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex items-center justify-center bg-slate-500 p-2.5 rounded-lg text-red-300 hover:text-red-500 hover:bg-slate-700 shadow-lg duration-200"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          {filteredTasks.length === 0 && (
            <div className="w-full h-14 rounded-lg !text-white bg-slate-400 bg-opacity-20 flex items-center justify-center">
              Task Table is Empty
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
