const { TaskTimer } = require("tasktimer");

exports.run = async (bot, message, args) => {
  if (args < 2 || args > 2) {
    message.reply(`usage: =mvp [name] [time]`);
  }

  let [name, time] = args;
  let msg = await message.channel.send(
    `MVP: ${name} going to be alive in ${time} min`
  );

  const timer = new TaskTimer(1000);
  if (time.includes("h")) {
    let [h, m] = time.split("h");
    console.log(`${h}:${m}`);
    time = Number(h * 60);
    time += Number(m);
  }

  console.log(time);

  let tm = time * 60;

  timer.add({
    id: name,
    tickInterval: 1,
    totalRuns: time * 60,
    callback(t) {
      if (tm-- % 60 === 0) {
        msg.edit(
          `MVP: ${name} going to be alive in ${(tm / 60).toFixed(0)} min`
        );
      }

      console.log(tm);
      if (tm <= 0) {
        msg.delete();
        message.reply(`${name} is alive!`);
        timer.stop();
      }
    },
  });

  timer.start();
};

exports.help = {
  name: "mvp",
  desc: "",
  usage: "mvp kiel 140 | mvp kiel 1h20",
};
