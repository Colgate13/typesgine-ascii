import typesgine from "typesgine-ascii";

console.clear();
let controllerToRender = false;

const render = () => {
  let final = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 24; j++) {
      final[i][j] = Math.round(Math.random() * (0 - 9) + 9);
    }
    final[i][final[i].length - 1] = "\n";
  }

  let Graph = [
    ["~", "2", "㊗", "㊗", "\n"],
    ["㊗", "㊗", "㊗", "㊗", "\n"],
    ["㊗", "㊗", "㊗", "㊗", "\n"],
  ];

  return final;
};

const frameHandler = (engineIo) => {
  engineIo.render(
    controllerToRender ? render() : "㊗2㊗㊗㊗㊗3㊗㊗4㊗㊗",
    3,
    4
  );
};

const inputHandler = (keyPress) => {
  if (keyPress == "a") {
    console.clear();
    controllerToRender = true;
  }

  if (keyPress == "b") {
    console.clear();
    controllerToRender = false;
  }

  console.log("KeyPress: ", keyPress);
};

new typesgine.EngineIo({
  fps: 60,
  frameHandler: frameHandler,
  callBackInput: inputHandler,
});
