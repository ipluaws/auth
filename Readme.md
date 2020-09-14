// AUTH JWT API (Postman)//

API:
1.
http://localhost:4000/api/user/register    (Post)
SAMPLE INPUT:

{
    "name": "Abdul Kuddus",
    "email": "kuddus123@gmail.com",
    "password": "1234567"
}

Sample Output:
{
    "user": "5f5e34acf925a837bce019c0"
}


2. http://localhost:4000/api/user/login (Post)

Sample Input:
{
    "email": "kuddus123@gmail.com",
    "password": "1234567"
}

Sample Output:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVlMzRhY2Y5MjVhODM3YmNlMDE5YzAiLCJpYXQiOjE2MDAwMTA1MzR9.jFeKpq5PSyjnlH6IYZVWc9XL7EQC7VGaTZEQfwBii7o

3. http://localhost:4000/dashboard   (Get)
Sample Input in Header:
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVlMzRhY2Y5MjVhODM3YmNlMDE5YzAiLCJpYXQiOjE2MDAwMTA1MzR9.jFeKpq5PSyjnlH6IYZVWc9XL7EQC7VGaTZEQfwBii7o

Sample Output:

Dashboard ;)

4. http://localhost:4000/dashboard/user     (Get)
Sample Input in Header:
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVlMzRhY2Y5MjVhODM3YmNlMDE5YzAiLCJpYXQiOjE2MDAwMTA1MzR9.jFeKpq5PSyjnlH6IYZVWc9XL7EQC7VGaTZEQfwBii7o

Sample Output:

{
    "_id": "5f5e34acf925a837bce019c0",
    "name": "Abdul Kuddus",
    "email": "kuddus123@gmail.com",
    "password": "$2a$10$pTrBcfugJoZ0TZPAW3vmbuc0Gmx0My4gTQFfAYf92UVUzYcvjYx.W",
    "date": "2020-09-13T15:03:08.013Z",
    "__v": 0
}


