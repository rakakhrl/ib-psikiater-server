## Psikiater Web App

#### Psikiater :

###### POST Upload Avatar Psikiater :

    url : {{baseUrl}}/psikiater/upload/:Psikiater_Id
    method : POST

###### HEADERS :

    accesstoken : Psikiater Access Token

###### BODY form-data :

    profile_photo , type = file

###### Example Request :

    request - POST {{baseUrl}}/psikiater/upload/5fe5a1efdf84fa2ae85c7861

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4

    form - profile_photo=Your photo directory

###### Table Info

|    Name     |                        Description                        | Type |                            Notes                             |
| :---------: | :-------------------------------------------------------: | :--: | :----------------------------------------------------------: |
|   request   |            For accessing our endpoint endpoint            | POST |   In this case, we want to posting psikiater photo profile   |
| accesstoken |      To use our token as a Psikiater to upload photo      | JWT  |        Token that we got when register as a Psikiater        |
|  form-data  | To input photo from our computer with key "profile_photo" | FILE | Choose file instead of text for the type to input your photo |

##### Example Response :

    {
    "status": "Success",
    "message": "Upload Success",
    "data": {
        "info": {
        "experience_year": "100+ year",
        "region": "Jupiter"
        },
        "schedule": {
        "work_days": [
            "Senin",
            "Jumat"
        ],
        "work_time": [
            "09:00 - 12:00",
            "13:00 - 16:00"
        ]
        },
        "is_active": true,
        "avatar_url": "http://localhost:3030/media/1608887669904-5fe5a1efdf84fa2ae85c7861-0.jpg",
        "_id": "5fe5a1efdf84fa2ae85c7861",
        "first_name": "Psikiater",
        "last_name": "Handal",
        "password": "$2b$10$PRx0VgUKDWZoduM9uT7BvuvyI3vHKMIdO51sFNDvegcKOPl5TF1hW",
        "email": "saya_handal@gmail.com",
        "date_of_birth": "1885-12-25T00:00:00.000Z",
        "gender": "Alien",
        "createdAt": "2020-12-25T08:25:19.195Z",
        "updatedAt": "2020-12-25T09:14:29.914Z"
    }
    }

###### PATCH Update Work Schedule Psikiater :

    url : {{baseUrl}}/schedule/:psikiater_id
    method : PATCH

###### HEADERS :

    accesstoken : Psikiater Access Token

###### BODY raw :

    {
    "work_days": ["Monday", "Friday"],
    "work_time": ["09:00 - 12:00", "13:00 - 16:00"]

}

###### Request Example :

    request - PATCH {{baseUrl}}/schedule/:psikiater_id

    header - accesstoken: Psikiater Access Token

    data :  {
    "work_days": ["Monday", "Friday"],
    "work_time": ["09:00 - 12:00", "13:00 - 16:00"]
    }

###### Table Info :

|    Name     |                    Descriptions                    | Types |                     Notes                      |
| :---------: | :------------------------------------------------: | :---: | :--------------------------------------------: |
|   request   |             To accessing our endpoint              | PATCH |           Update Psikiater Schedule            |
| accesstoken | To use our token as a Psikiater to update schedule |  JWT  | Token that we got when register as a Psikiater |
|  work_day   |                Psikiater work days                 | ARRAY |
|  work_time  |                Psikaiter work time                 | ARRAY |

###### Response Example :

    {
    "status": "Success",
    "message": "Success update schedule",
    "data": {
        "info": {
        "experience_year": "100+ year",
        "region": "Jupiter"
        },
        "schedule": {
        "work_days": [
            "Senin",
            "Jumat"
        ],
        "work_time": [
            "09:00 - 12:00",
            "13:00 - 16:00"
        ]
        },
        "is_active": true,
        "avatar_url": "http://localhost:3030/media/1608887669904-5fe5a1efdf84fa2ae85c7861-0.jpg",
        "_id": "5fe5a1efdf84fa2ae85c7861",
        "first_name": "Psikiater",
        "last_name": "Handal",
        "password": "$2b$10$PRx0VgUKDWZoduM9uT7BvuvyI3vHKMIdO51sFNDvegcKOPl5TF1hW",
        "email": "saya_handal@gmail.com",
        "date_of_birth": "1885-12-25T00:00:00.000Z",
        "gender": "Alien",
        "createdAt": "2020-12-25T08:25:19.195Z",
        "updatedAt": "2020-12-25T09:14:38.035Z"
    }
    }

#### Prescription :

###### POST Create Prescription :

    {{baseUrl}}/prescriptions

###### HEADERS :

    accesstoken : Psikiater Access Token

###### BODY raw :

    {
    "drug_name": "Allupurinol",
    "method_name": "Swallow directly with water",
    "time_sequence": "After Meals"
    }

###### Request Example :

    request - POST {{baseUrl}}/prescriptions

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4

    data : {
        "drug_name": "Allupurinol",
        "method_name": "Swallow directly with water",
        "time_sequence": "After Meals"
    }'

###### Table Info :

|     Name      |                            Description                             | Types  |                     Notes                      |
| :-----------: | :----------------------------------------------------------------: | :----: | :--------------------------------------------: |
|    request    |                     To accessing our endpoint                      |  POST  |   Posting prescription for psikiater patient   |
|  accesstoken  | To use our token as a Psikiater to create prescription for patient |  JWT   | Token that we got when register as a Psikiater |
|   drug_name   |               Name of drugs that we gave to patient                | STRING |
|  method_name  |                     Consume method for patient                     | STRING |
| time_sequence |              What time patient should using the drugs              | STRING |

###### Response Example :

    {
    "status": "Success",
    "message": "Success create prescription",
    "data": {
        "drugs": {
        "consume_method": {
            "time_sequence": [
            "After Meals"
            ],
            "method_name": "Swallow directly with water"
        },
        "drug_name": "Allupurinol"
        },
        "_id": "5fe5a7c22d650a3e4497c700",
        "__v": 0
    }
    }

#### Auth (Authentication)

###### POST Register Psikiater :

    {{baseUrl}}/auth/register-psikiater

###### BODY raw :

    {
    "first_name": "Psikiater",
    "last_name": "Handal",
    "password": "123456",
    "email": "saya_handal@gmail.com",
    "date_of_birth": "1885-12-25",
    "gender": "Alien",
    "experience_year": "100+ year",
    "region": "Jupiter"
    }

###### Request Example :

    request - POST {{baseUrl}}/auth/register-psikiater

    data - raw {
    "first_name": "Psikiater",
    "last_name": "Handal",
    "password": "123456",
    "email": "saya_handal@gmail.com",
    "date_of_birth": "1885-12-25",
    "gender": "Alien",
    "experience_year": "100+ year",
    "region": "Jupiter"
    }

###### Table Info :

|      Name       |       Descriptions        |  Type  |          Notes          |
| :-------------: | :-----------------------: | :----: | :---------------------: |
|     request     | To accessing our endpoint |  POST  | Register as a Psikiater |
|   first_name    |   Psikiater First Name    | STRING |                         |
|    last_name    |    Psikiater Last Name    | STRING |                         |
|    password     |    Psikiater Password     | STRING |                         |
|      email      |      Psikiater Email      | STRING |                         |
|  date_of_birth  |  Psikiater Date of Birth  | STRING |                         |
|     gender      |     Psikiater Gender      | STRING |                         |
| experience_year | Psikiater Experience Year | STRING |                         |
|     region      |     Psikiater Region      | STRING |                         |

###### Response Example :

    {
    "status": "created",
    "message": "Success create psikiater data.",
    "psikiater": {
        "schedule": {
        "work_days": [],
        "work_time": []
        },
        "is_active": true,
        "avatar_url": "",
        "_id": "5fe5a1efdf84fa2ae85c7861",
        "first_name": "Psikiater",
        "last_name": "Handal",
        "password": "$2b$10$PRx0VgUKDWZoduM9uT7BvuvyI3vHKMIdO51sFNDvegcKOPl5TF1hW",
        "email": "saya_handal@gmail.com",
        "date_of_birth": "1885-12-25T00:00:00.000Z",
        "gender": "Alien",
        "info": {
        "experience_year": "100+ year",
        "region": "Jupiter"
        },
        "createdAt": "2020-12-25T08:25:19.195Z",
        "updatedAt": "2020-12-25T08:25:19.195Z"
    }
    }

###### POST Login User (Psikiater/Patient)

    {{baseUrl}}/auth/login

###### BODY raw :

    {
    "email": "saya_handal@gmail.com",
    "password": "123456"
    }

###### Request Example :

    request POST {{baseUrl}}/auth/login

    data - raw {
        "email": "saya_handal@gmail.com",
        "password": "123456"
    }

###### Table Info :

|   Name   |        Description        |  Type  |            Notes             |
| :------: | :-----------------------: | :----: | :--------------------------: |
| request  | To accessing our endpoint |  POST  | Login as a Psikiater/Patient |
|  email   |    User Email Address     | STRING |                              |
| password |       User Password       | STRING |                              |

###### Response Example :

    {
    "status": "success",
    "message": "Login successfull.",
    "role": "PSIKIATER",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4"
    }

#### Other :

###### GET Access Media :

    http://localhost:3030/media/:photo_url_that_we_upload

###### HEADERS :

    accesstoken : Psikiater Access Token

###### Request Example :

    request - GET 'http://localhost:3030/media/1608885361721-5fe5a1efdf84fa2ae85c7861-0.jpg'

    header - accesstoken : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4

###### Table Info :

|    Name     |        Description        | Type | Notes |
| :---------: | :-----------------------: | :--: | :---: |
|   request   | To accessing our endpoint | GET  |       |
| accesstoken |  Psikiater Access Token   | JWT  |       |

###### Response Example

**Psikiater Will Get Photo**
