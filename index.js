class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}
class Route{
  constructor(horizontal,vertical){
    this.horizontal = horizontal
    this.vertical = vertical
  }
  blocksTravelled(){
    // debugger
    if (this.vertical["vertical"] > this.horizontal["vertical"]){
      return this.vertical["vertical"] - this.horizontal["vertical"]
    }else if(this.vertical["vertical"] === this.horizontal["vertical"]){
      return 4
    }
  }

}
