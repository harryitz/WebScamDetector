
import { CancelTaskException } from "../../../../../../src/scheduler/CancelTaskException.js";
import { Task } from "../../../../../../src/scheduler/Task.js";

export class TestScheduler extends Task {

    onRun() {
        console.log("Hello World!");
        // Cancel task
        // throw new CancelTaskException()
    }

    onCancel() {
        console.log("Task cancel");
    }
}