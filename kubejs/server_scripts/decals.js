const decals = [
  "create_things_and_misc:train_sing",
  "create_things_and_misc:train_sing_2",
  "create_things_and_misc:train_sing_3",
  "create_things_and_misc:train_sing_4",
  "create_things_and_misc:train_sing_5",
  "create_things_and_misc:train_sing_yellow_1",
  "create_things_and_misc:train_sing_yellow_2",
  "create_things_and_misc:train_sing_yellow_3",
  "create_things_and_misc:train_sing_yellow_4",
  "create_things_and_misc:train_sing_yellow_5",
  "create_things_and_misc:redsing",
  "create_things_and_misc:redsing_1",
  "create_things_and_misc:redsing_2",
  "create_things_and_misc:green_sing",
  "create_things_and_misc:green_sing_1",
  "create_things_and_misc:green_sing_2",
  "create_things_and_misc:green_sing_3",
  "create_things_and_misc:green_sing_4",
  "create_things_and_misc:green_sing_5",
  "create_things_and_misc:green_sing_6",
  "create_things_and_misc:speed_25",
  "create_things_and_misc:speed_50",
  "create_things_and_misc:speed_75",
  "create_things_and_misc:speed_100",
  "createdeco:white_decal",
  "createdeco:orange_decal",
  "createdeco:magenta_decal",
  "createdeco:light_blue_decal",
  "createdeco:yellow_decal",
  "createdeco:lime_decal",
  "createdeco:pink_decal",
  "createdeco:gray_decal",
  "createdeco:light_gray_decal",
  "createdeco:cyan_decal",
  "createdeco:purple_decal",
  "createdeco:blue_decal",
  "createdeco:brown_decal",
  "createdeco:green_decal",
  "createdeco:red_decal",
  "createdeco:black_decal",
  "design_decor:moyai_sign",
  "design_decor:warning_sign",
  "design_decor:arrow_up_sign",
  "design_decor:tap_sign",
  "design_decor:stop_sign",
  "design_decor:arrow_right_sign",
  "design_decor:arrow_left_sign",
  "design_decor:glitch_warning_sign",
  "design_decor:broken_wrench_sign",
  "design_decor:biohazard_sign",
  "design_decor:capitalism_warning_sign",
  "design_decor:arrow_down_sign",
  "design_decor:gear_sign",
  "design_decor:creeper_sign",
  "design_decor:bun_sign",
  "design_decor:silly_sign",
  "design_decor:american_sign",
  "design_decor:magnet_sign",
  "design_decor:blank_sign",
];

ServerEvents.recipes((event) => {
  decals.forEach((decal) => {
    event.remove({ output: decal });

    event.stonecutting(decal, "#forge:nuggets/zinc");
    event.stonecutting(decal, "#kubejs:create_decals");
  });
});
