// src/utils/tursoClient.js
/*export const fetchTasks = async () => {
  try {
    const response = await fetch("https://sheetdb.io/api/v1/8dri04s4mddpk");
    const data = await response.json();
    const tasks = {};

    data.forEach(item => {
      tasks[item.day] = item.task;
    });

    return tasks;
  } catch (error) {
    throw new Error("Error fetching tasks: " + error.message);
  }
};

export const saveTask = async (day, task) => {
  try {
    await fetch("https://sheetdb.io/api/v1/8dri04s4mddpk", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            day,
            task
          },
        ],
      }),
    });
  } catch (error) {
    throw new Error("Error saving task: " + error.message);
  }
};
*/