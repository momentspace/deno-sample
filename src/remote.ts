function remote-sample(): void {
  await setTimeout(() => {
    console.log("world!");
  }, 1000);
  console.log("hello, ");
}

