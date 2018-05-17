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
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    // debugger
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const vertical = this.endingLocation["vertical"] - this.beginningLocation["vertical"]
    const point_A = eastWest.indexOf(this.beginningLocation["horizontal"])
    const point_B = eastWest.indexOf(this.endingLocation["horizontal"])


    const horizontal = eastWest.slice(point_A,point_B).length
    return vertical + horizontal

  }
  estimatedTime(){
    // debugger
    // return Date.prototype.getHours

    const today = new Date
    return today.getHours() >= 22 && today.getHours() <= 24 ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3

    if (today.getHours() >= 1 && today.getHours() <= 9){
      return this.blocksTravelled() / 2
    }else {
      return this.blocksTravelled() / 3
    }

    // return this.blocksTravelled() / 2

  }

}
