"use client";
export default function Home() {

    function helloguy() {
      const a = true;
      if (!a) {
        throw new Error("worst code have been given");
      }
    };
    try {
      console.log("hello guy from actions");
      helloguy()
    } catch (error: any) {
      console.log(error);
    }
  
  return (
    <div>
      <div>helo gyys im wrkng</div>
    </div>
  );
}
