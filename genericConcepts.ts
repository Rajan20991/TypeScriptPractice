function identity<T>(value:T):T{
    console.log(value);
    return value;
}

identity<number>(4);
identity<boolean>(false);
const output1 = identity<string>("Sidharth");  // "Sidharth"
const output2 = identity<number>(101);    

function getTest(arr: any[]) {
   console.log(arr[0]);
   return arr[0]
}
const val1 = getTest(["tests","1","2"]);

function getTest2<T>(arr: T[]): T {
   console.log(arr[0]);
   return arr[0]
}
const val = getTest2<string>(["tests","1","2"]);

interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: {
    name: 'Sidharth',
    age: 34
  }
};

