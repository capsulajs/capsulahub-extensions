import { Observable, of, timer, merge } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import logs from '../../cypress/fixtures/logs';
import { LoggerUIProps } from '../api';

interface LogFixture {
  correlationId: string;
  type: 'request' | 'response';
  serviceName: string;
  methodName: string;
  content: Object;
  delay: number;
}

export const props$: Observable<LoggerUIProps> = of({
  logs$: merge(
    ...(logs as Array<LogFixture>).map(({ correlationId, type, serviceName, methodName, content, delay }) =>
      of({
        correlationId,
        type,
        serviceName,
        methodName,
        timestamp: new Date().getTime(),
        data: { content },
      }).pipe(delayWhen(() => timer(delay)))
    )
  ),
});
