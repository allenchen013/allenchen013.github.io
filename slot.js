async function startAnimation() {
    startAudio();
    if (document.getElementById(`result_A`)) {
      const el=document.getElementById(`result_A`);
      el.style.transform = 'translateY(0%)';    
      el.classList.toggle("is-play");
    }
    if (document.getElementById(`result_B`)) {
      const el=document.getElementById(`result_B`);
      el.style.transform = 'translateY(0%)';  
      el.classList.toggle('is-play');
    }
    if (document.getElementById(`result_C`)) {
      const el=document.getElementById(`result_C`);
      el.style.transform = 'translateY(0%)';   
      el.classList.toggle('is-play');
    }
}

async function stopAnimation() {
  const dd = document.getElementById("dd");
  const cc = document.getElementById("cc");

  cc.play();
  dd.load();  
  dd.pause();
  

if (document.getElementById(`result_A`)) {
    const ela=document.getElementById(`result_A`);
    const elb=document.getElementById(`result_B`);
    const elc=document.getElementById(`result_C`);

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const num3 = Math.floor(Math.random() * 8);

    await delay(1000); 
    ela.classList.toggle("is-play");
    ela.classList.add('is-play3');
    await delay(1000);
    ela.classList.remove('is-play3');
    await delay(100);
    ela.style.transform = `translateY(-50%)`;
    await delay(10);
    ela.style.transform = `translateY(-75%)`;
    await delay(10);
    ela.style.transform = `translateY(0%)`;
    await delay(10);
    ela.style.transform = `translateY(${-num1/10 * 100}%)`;

    elb.classList.toggle('is-play');
    elb.classList.add('is-play3');
    await delay(1000);
    elb.classList.remove('is-play3');
    await delay(100);    
    elb.style.transform = `translateY(-50%)`;
    await delay(10);
    elb.style.transform = `translateY(-75%)`;
    await delay(10);
    elb.style.transform = `translateY(0%)`;
    await delay(10);
    elb.style.transform = `translateY(${-num2/10 * 100}%)`;

    elc.classList.toggle('is-play');
    elc.classList.add('is-play3');
    await delay(1000);
    elc.classList.remove('is-play3');
    await delay(100);    
    elc.style.transform = `translateY(-50%)`;
    await delay(10);
    elc.style.transform = `translateY(-75%)`;
    await delay(10);
    elc.style.transform = `translateY(0%)`;
    await delay(10);
    elc.style.transform = `translateY(${-num3/8 * 100}%)`;

}

}

class app{
    state0 = new State0(this)
    state1 = new State1(this)
    currentState = this.state1

    init() {
      const audio = document.getElementById("dd");
            
      audio.play();
      audio.muted=false;
      var body=document.body;
      // body.addEventListener("touchstart",(e)=>{
      //   e.preventDefault();
      //   this.currentState.onClick();
      // });
      body.addEventListener("click", (e)=>{
        e.preventDefault();
        this.currentState.onClick();
      });
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
    setTimeout(resolve, n * 1);
  });
}

function startAudio() {
  const audio = document.getElementById("dd");
  audio.play();    
}