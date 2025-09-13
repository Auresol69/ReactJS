// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

function Button() {


    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };
    
    // Event parameter

    // Check all properties about event
    // const handleClick = (e) => console.log(e);

    const handleClick = (e) => e.target.textContent = "OUCH! 🙄";

    // return (<><button onClick={() => handleClick2("Roy")}>Click me 😍</button></>);
    return (<><button onDoubleClick={(e) => handleClick(e)}>Click me 😍</button></>);
}

export default Button