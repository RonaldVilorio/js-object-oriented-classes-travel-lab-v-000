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
    // return this.endingLocation["vertical"] - this.beginningLocation["vertical"] vertical
    const point_A = eastWest.indexOf(this.beginningLocation["horizontal"])
    const point_B = eastWest.indexOf(his.endingLocation["horizontal"])

    return eastWest.slice(point_A,point_B).length



  }

}
