import { Observable, of, interval } from "rxjs";
import { map } from "rxjs/operators";
import { Event } from "./types";
import Logger from "./logger";
import { prepareWebComponent } from "@capsulajs/web-components-utils";

class LogsWithData extends Logger {
  public setProps() {
    this.props$ = of({
      width: 600,
      height: 400,
      logs: [
        interval(3000).pipe(
          map(
            (): Event => ({
              correlationId: "Adele",
              type: "request",
              serviceName: "AdeleService",
              methodName: "hello$",
              timestamp: new Date().getTime(),
              data: { verse2: "Hello, how are you?" }
            })
          )
        ),
        interval(3000).pipe(
          map(
            (): Event => ({
              correlationId: "Queen",
              type: "response",
              serviceName: "QueenService",
              methodName: "showMustGoOn$",
              timestamp: new Date().getTime(),
              data: { verse1: "Empty spaces, what are we living for" }
            })
          )
        )
      ]
    });
  }
}

const componentModules = {
  ["http://cdn.components/Logger.tsx"]: LogsWithData
};

prepareWebComponent({
  name: "web-logger",
  path: "http://cdn.components/Logger.tsx",
  componentModules
}).then(webComponent =>
  document.querySelector("#web-logger")!.appendChild(webComponent)
);
