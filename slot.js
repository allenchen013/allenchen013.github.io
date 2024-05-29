async function startAnimation() {
    if (document.getElementById(`result_A`)) {
      document.getElementById(`result_A`).classList.add('is-play');
      document.getElementById(`result_A`).style.transform = 'none';
    }
    if (document.getElementById(`result_B`)) {
      document.getElementById(`result_B`).classList.add('is-play');
      document.getElementById(`result_B`).style.transform = 'none';
    }
    if (document.getElementById(`result_C`)) {
      document.getElementById(`result_C`).classList.add('is-play');
      document.getElementById(`result_C`).style.transform = 'none';
    }
}

async function stopAnimation() {

if (document.getElementById(`result_A`)) {
    const num1 = Math.floor(Math.random() * 2);
    await delay(1);
    document.getElementById(`result_A`).classList.remove('is-play');
    document.getElementById(`result_A`).classList.add('is-play5');
    await delay(1);
    document.getElementById(`result_A`).classList.remove('is-play5');
    document.getElementById(`result_A`).style.transform = `translateY(${-num1/10 * 100}%)`;

    await delay(1)
    const num2 = Math.floor(Math.random() * 10);
    document.getElementById(`result_B`).classList.remove('is-play');
    document.getElementById(`result_B`).classList.add('is-play5');
    await delay(1)
    document.getElementById(`result_B`).classList.remove('is-play5');
    document.getElementById(`result_B`).style.transform = `translateY(${-num2/10 * 100}%)`;

    await delay(1)
    const num3 = Math.floor(Math.random() * 8);
    document.getElementById(`result_C`).classList.remove('is-play');
    document.getElementById(`result_C`).classList.add('is-play5');
    await delay(1)
    document.getElementById(`result_C`).classList.remove('is-play5');
    document.getElementById(`result_C`).style.transform = `translateY(${-num3/8 * 100}%)`;

}
// if (document.getElementById(`result_B`)) {
//     const num = Math.floor(Math.random() * 10);
//     document.getElementById(`result_B`).classList.remove('is-play');
//     document.getElementById(`result_B`).style.transform = `translateY(${-num/10 * 100}%)`;
// }
// if (document.getElementById(`result_C`)) {
//     const num = Math.floor(Math.random() * 8);
//     document.getElementById(`result_C`).classList.remove('is-play');
//     document.getElementById(`result_C`).style.transform = `translateY(${-num/8 * 100}%)`;
// } 

}
  var body=document.body;
  
  // body.addEventListener("keydown", (e)=>{
  //   if(e.keyCode==32) stopAnimation();});

class app{
    state0 = new State0(this)
    state1 = new State1(this)
    currentState = this.state0

    init() {
      var body=document.body;
      body.addEventListener("keydown", (e)=>{
      if(e.keyCode==32) this.currentState.onClick();});
    }

    setState(stateName) {
      this.currentState = this[stateName]
    }
}

class State {
  constructor(app) {
      this.app = app
  }
  nextState = '' // set by subclass

  onClick() {
  throw new Error('onClick method is required.')
  }

  next() {
      this.app.setState(this.nextState)
  }
}

class State0 extends State {
  nextState = 'state1'
  onClick() {
    stopAnimation();
    this.next()
  }
}

class State1 extends State {
  nextState = 'state0'
  onClick() {
    startAnimation();
    this.next();
  }
}

new app().init()


function delay(n) {
  return new Promise(function(resolve) {
    setTimeout(resolve, n * 1000);
  });
}