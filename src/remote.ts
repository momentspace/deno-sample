async function remote(): void {
  await setTimeout(() => {
    console.log("world!");
  }, 1000);
  console.log("hello, ");
}

