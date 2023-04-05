import chalkAnimation from 'chalk-animation';


const sleep = (ms: 1000) => new Promise(resolve => setTimeout(resolve, ms));
// Welcome animation function
async function welcomeAnimation(){
    let rainbow = chalkAnimation.rainbow('TODO-LIST CLI');
    await sleep(1000);
    rainbow.stop();
}

export default welcomeAnimation;