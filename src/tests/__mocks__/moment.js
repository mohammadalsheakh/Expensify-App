// mocking : we use moking when we have to test a dynamic componenet that is means if we have a changing element in the componenet 
// this changining element will not be the same in the snapshot test so we use mocking to call a function 
// when we need to use the changing element in this case we hvae the moments 

const moment = jest.requireActual(`moment`) // here we stored the module or the componenet we need in a variable
export default(timeStamp = 0) =>{
    return moment(timeStamp) // and here we returned the mocked modual when we need to use it in the testing
}