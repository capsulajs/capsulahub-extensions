import { of, timer, merge } from "rxjs";
import { delayWhen } from "rxjs/operators";

const createAdeleEvent = (content, delay) =>
  of({
    correlationId: "Adele",
    type: "request",
    serviceName: "AdeleService",
    methodName: "hello$",
    timestamp: new Date().getTime(),
    data: { content }
  }).pipe(delayWhen(() => timer(delay)));

const createSupportEvent = (content, delay) =>
  of({
    correlationId: "Support",
    type: "response",
    serviceName: "PhoneService",
    methodName: "hello$",
    timestamp: new Date().getTime(),
    data: { content }
  }).pipe(delayWhen(() => timer(delay)));

export const content1 = "Hello, it's me";
export const content2 =
  "I was wondering if after all these years you'd like to meet";
export const content3 =
  "They say that time's supposed to heal ya, but I ain't done much healing";
export const content4 = "Hello, can you hear me?";
export const content5 = "No";
export const props$ = of({
  logs$: merge(
    createAdeleEvent(content1, 0),
    createAdeleEvent(content2, 2500),
    createAdeleEvent(content3, 5000),
    createAdeleEvent(content4, 7500),
    createSupportEvent(content5, 10000)
  )
});
