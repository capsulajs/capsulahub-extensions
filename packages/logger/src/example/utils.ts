import { of, timer, merge } from "rxjs";
import { delayWhen } from "rxjs/operators";
import logs from "../../cypress/fixtures/logs.json";

export const props$ = of({
  logs$: merge(
    ...logs.map(
      ({ correlationId, type, serviceName, methodName, content, delay }, i) =>
        of({
          correlationId,
          type,
          serviceName,
          methodName,
          timestamp: new Date().getTime(),
          data: { content }
        }).pipe(delayWhen(() => timer(i * delay)))
    )
  )
});
