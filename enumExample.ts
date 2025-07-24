enum testExecutionStatus{
    Pass,
    Fail,
    Skip
}

enum priority{
   Low = 1,
   Medium = 2,
   High = 3
}console.log(priority.Low)

enum userRole {
   Admin = "adm01",
   Manager = "mng80",
   Employee = "Rajan",
   Student = "stu87"
}
console.log(userRole.Employee)

function getRole(role: userRole): string {
  if (role === userRole.Admin) {
   console.log("Access Provided");
   return "Access Provided";
  }
  console.log("Access Denied");
  return "Access Denied";
}

getRole(userRole.Manager);
