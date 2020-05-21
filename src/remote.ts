export async function remote() {
  await setTimeout(() => {
    console.log("world!");
  }, 1000);
  console.log("hello, ");
}

