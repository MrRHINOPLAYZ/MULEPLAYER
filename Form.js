class Form{
    constructor(){
        this.title = createElement('h3')
       this.input = createInput()
       this. greeting = createElement ('h4')
       this.button = createButton('RIDE!')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    
   
    display(){
   
        this.title.html('SIMPLE RIDER')
        this.title.position(300,0)
        this.input.position (300,150)
        this.button.position(400,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
player.name = this.input.value()
playerCount+=1
player.index=playerCount
player.updateCount(playerCount)

this.greeting.html('NAME'+player.name)
this.greeting.position(300,150)
    })

    }
    
    
}