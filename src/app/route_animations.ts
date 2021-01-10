import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  stagger
} from "@angular/animations";
export const fadeAnimation = trigger("fadeAnimation", [
  transition("* <=> *", [
    query(
      ":enter :leave",
      style({
        opacity: 0,
        position: "absolute",
        width: "100%",
        height: "100%"
      }),
      { optional: true }
    ),
    group([
      query(":enter", animate("0.8s 1s", style({ opacity: 1 })), {
        optional: true
      }),
      query(
        ":leave",
        animate(
          "0.2s ease-in-out",
          style({ opacity: 0, transform: "scale(0.9)" })
        ),
        { optional: true }
      )
    ])
  ])
]);
