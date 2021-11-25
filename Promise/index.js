async function main(flag) {
  try {
    const result = await test(flag);
    console.log("O...Main");
    console.log("result: ", result);
  } catch (error) {
    console.log("X...Main");
    console.log("error: ", error);
  } finally {
    console.log("!...Main");
  }
}

function test(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      console.log("flag:ifco");
      resolve("O...Test");
    } else {
      console.log("flag:else");
      reject("X...Test");
    }
    console.log("!...Test");
  });
}

main(false);
