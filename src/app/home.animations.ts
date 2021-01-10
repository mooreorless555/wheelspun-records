// declare var anime: any; // declare like this

export const introduce = () => {
  // if (!anime) {
  //   console.log("Anime not defined...");
  // }

  // Wrap every letter in a span
  const textWrapper1 = document.querySelector(".an-1");
  textWrapper1.innerHTML = textWrapper1.textContent.replace(
    /\S/g,
    "<div class='letter-anim'>$&</div>"
  );

  const textWrapper2 = document.querySelector(".an-2");
  textWrapper2.innerHTML = textWrapper2.textContent.replace(
    /\S/g,
    "<div class='letter-anim'>$&</div>"
  );

  // anime
  //   .timeline()
  //   .add({
  //     targets: [".an-0", ".an-4"],
  //     translateY: [textWrapper1.getClientRects().item(0).height],
  //     opacity: 0,
  //     duration: 1
  //   })
  //   .add({
  //     targets: ".an-0",
  //     opacity: 1,
  //     duration: 3000,
  //     delay: 1000
  //   })
  //   .add(
  //     {
  //       targets: ".an-0",
  //       translateY: 0,
  //       duration: 2000
  //     },
  //     "-=2000"
  //   )
  //   .add(
  //     {
  //       targets: ".an-1 .letter-anim",
  //       rotateX: [720, 0],
  //       opacity: [0, 1],
  //       elasticity: 400,
  //       duration: 2000,
  //       delay: (el, i) => 70 * i
  //     },
  //     "-=1000"
  //   )
  //   .add(
  //     {
  //       targets: ".an-2 .letter-anim",
  //       rotateX: [720, 0],
  //       opacity: [0, 1],
  //       elasticity: 400,
  //       duration: 4000,
  //       delay: (el, i) => 70 * i
  //     },
  //     "-=2000"
  //   )
  //   .add(
  //     {
  //       targets: ".an-0",
  //       translateY: [textWrapper1.getClientRects().item(0).height],
  //       opacity: 0,
  //       duration: 1000,
  //       easing: "easeOutExpo"
  //     },
  //     "-=2000"
  //   )
  //   .add(
  //     {
  //       targets: ".an-4",
  //       opacity: 1,
  //       translateY: 0,
  //       duration: 1000,
  //       easing: "easeOutExpo"
  //     },
  //     "-=1000"
  //   )
  //   .add(
  //     {
  //       targets: [".an-0"],
  //       height: 0,
  //       duration: 3000,
  //       easing: "easeOutExpo"
  //     },
  //     "-=1000"
  //   );
};

export const animConnectWithSpotifyClicked = callback => {
  document.querySelector(".an-2").innerHTML = "Please wait...";
  document.querySelector(".an-1").innerHTML = "";
  // anime
  //   .timeline()
  //   .add({
  //     targets: [".an-4"],
  //     scale: 0.8,
  //     duration: 1000,
  //     elasticity: 800
  //   })
  //   .add(
  //     {
  //       targets: [".an-4"],
  //       opacity: 0.5,
  //       duration: 1000,
  //       elasticity: 800
  //     },
  //     "-=1000"
  //   )
  //   .add(
  //     {
  //       targets: [".an-1"],
  //       opacity: 0,
  //       scale: 0.8,
  //       duration: 1000,
  //       easing: "easeOutExpo"
  //     },
  //     "-=500"
  //   )
  //   .add(
  //     {
  //       targets: [".an-1"],
  //       width: 0,
  //       height: 0,
  //       duration: 3000,
  //       easing: "easeOutExpo",
  //       complete: function() {
  //         callback();
  //       }
  //     },
  //     "-=500"
  //   )
  //   .add(
  //     {
  //       targets: [".an-4"],
  //       scale: 1,
  //       duration: 1000,
  //       elasticity: 800,
  //       loop: 10
  //     },
  //     1000
  //   );
};
