import * as s from "./shears";
import t from "typeofit";

const resultGuard = t.struct({
  link: t.string,
  content: t.string,
  flags: t.array(t.struct({ src: t.string, title: t.string, link: t.string })),
});

export const getNames = async () => {
  const result = await s.goto(
    "https://en.wikipedia.org/wiki/List_of_World_War_II_military_operations",
    s.query(["ul > li"], {
      link: "a@href",
      content: "a",
      flags: s.query([".flagicon"], {
        src: "img@src",
        title: "a@title",
        link: "a@href",
      }),
    })
  )();

  return result.filter((x) => x.flags.length > 0).filter(resultGuard);
};
