import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <>
      <form action="" className="form">
        <div className="formRow">
          <DefaultInput
            labelText="task"
            type="text"
            id="meuInput"
            placeholder="Digite algo"
          />
        </div>

        <div className="formRow">
          <p>Task task task task task...</p>
          <input id="input" type="text" />
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
}
