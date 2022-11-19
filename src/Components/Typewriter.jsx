

import Typewriter from "typewriter-effect";

export const TypeWriter=()=> {
  return (
    <Typewriter
      options={{
        strings: ["Career Page.","Talent Advisor.","Skill Cloud."],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}


