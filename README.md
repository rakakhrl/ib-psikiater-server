## Psikiater Web App

#

## 1. Psikiater :

<br>

#### POST Upload Avatar Psikiater :

<br>

    url : {{baseUrl}}/psikiater/upload/:Psikiater_Id
    method : POST

###### HEADERS :

<br>

    accesstoken : Psikiater Access Token

###### BODY form-data :

<br>

    profile_photo , type = file

###### Request Example :

<br>

    request - POST {{baseUrl}}/psikiater/upload/5fe5a1efdf84fa2ae85c7861

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4

    form - profile_photo=Your photo directory

#### Table Info

<br>

|    Name     |                       Descriptions                        | Type |                            Notes                             |
| :---------: | :-------------------------------------------------------: | :--: | :----------------------------------------------------------: |
|   request   |            For accessing our endpoint endpoint            | POST |   In this case, we want to posting psikiater photo profile   |
| accesstoken |      To use our token as a Psikiater to upload photo      | JWT  |        Token that we got when register as a Psikiater        |
|  form-data  | To input photo from our computer with key "profile_photo" | FILE | Choose file instead of text for the type to input your photo |

#

<br>

###### Example Response :

<br>

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

#### PATCH Update Work Schedule Psikiater :

<br>

    url : {{baseUrl}}/schedule/:psikiater_id
    method : PATCH

###### HEADERS :

<br>

    accesstoken : Psikiater Access Token

###### BODY raw :

<br>

    {
    "work_days": ["Monday", "Friday"],
    "work_time": ["09:00 - 12:00", "13:00 - 16:00"]

}

###### Request Example :

<br>

    request - PATCH {{baseUrl}}/schedule/:psikiater_id

    header - accesstoken: Psikiater Access Token

    data :  {
    "work_days": ["Monday", "Friday"],
    "work_time": ["09:00 - 12:00", "13:00 - 16:00"]
    }

#### Table Info

<br>

|    Name     |                    Descriptions                    | Types |                     Notes                      |
| :---------: | :------------------------------------------------: | :---: | :--------------------------------------------: |
|   request   |             To accessing our endpoint              | PATCH |           Update Psikiater Schedule            |
| accesstoken | To use our token as a Psikiater to update schedule |  JWT  | Token that we got when register as a Psikiater |
|  work_day   |                Psikiater work days                 | ARRAY |
|  work_time  |                Psikaiter work time                 | ARRAY |

#

###### Response Example :

<br>

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

## 2. Prescription :

<br>

#### POST Create Prescription :

<br>

    {{baseUrl}}/prescriptions/:appointment_id

###### HEADERS :

<br>

    accesstoken : Psikiater Access Token

###### BODY raw :

<br>

    {
    "drug_name": "Sakatonik ABC",
    "method_name": "Digerus emak dulu. Diabisin jangan dilepeh",
    "time_sequence": "Sebelum Makan"
    }

###### Request Example :

<br>

gaada appointment id pada dokumentasi postman

    request - POST {{baseUrl}}/prescriptions

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4

    data : {
    "drug_name": "Sakatonik ABC",
    "method_name": "Digerus emak dulu. Diabisin jangan dilepeh",
    "time_sequence": "Sebelum Makan"
    }

#### Table Info

<br>

|     Name      |                            Descriptions                            | Types  |                     Notes                      |
| :-----------: | :----------------------------------------------------------------: | :----: | :--------------------------------------------: |
|    request    |                     To accessing our endpoint                      |  POST  |   Posting prescription for psikiater patient   |
|  accesstoken  | To use our token as a Psikiater to create prescription for patient |  JWT   | Token that we got when register as a Psikiater |
|   drug_name   |               Name of drugs that we gave to patient                | STRING |
|  method_name  |                     Consume method for patient                     | STRING |
| time_sequence |              What time patient should using the drugs              | STRING |

#

###### Response Example :

<br>

    {
        "status": "Success",
        "message": "Success create prescription",
        "data": {
            "drugs": {
                "consume_method": {
                "time_sequence": [
                    "Sebelum Makan"
                ],
                "method_name": "Digerus emak dulu. Diabisin jangan dilepeh"
                },
                "drug_name": "Sakatonik ABC"
            },
            "\_id": "5fe5a7c22d650a3e4497c700",
            "\_\_v": 0
        }
    }

## 3. Auth (Authentication)

<br>

#### POST Register Psikiater :

<br>

    {{baseUrl}}/auth/register-psikiater

###### BODY raw :

<br>

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

<br>

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

#### Table Info

<br>

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

#

###### Response Example :

<br>

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

#### POST Resister Patient :

<br>

    {{baseUrl}}/auth/register-patient

###### BODY raw :

<br>

    {
      "first_name": "RakaK",
      "last_name": "Azhar",
      "email": "raka@gmail.com",
      "password": "123456",
      "date_of_birth": "1997/11/15",
      "gender": "Laki-laki",
      "address": "Bekasi"
    }

###### Request Example :

<br>

    request POST {{baseUrl}}/auth/register-patient

    data - raw {
      "first_name": "RakaK",
      "last_name": "Azhar",
      "email": "raka@gmail.com",
      "password": "123456",
      "date_of_birth": "1997/11/15",
      "gender": "Laki-laki",
      "address": "Bekasi"
    }

#### Table Info

<br>

|     Name      |       Descriptions        |  Type  |         Notes         |
| :-----------: | :-----------------------: | :----: | :-------------------: |
|    request    | To accessing our endpoint |  POST  | Register as a Patient |
|  first_name   |    Patient First Name     | STRING |                       |
|   last_name   |     Patient Last Name     | STRING |                       |
|     email     |       Patient Email       | STRING |                       |
|   password    |     Patient Password      | STRING |                       |
| date_of_birth |   Patient Date of Birth   | STRING |                       |
|    gender     |      Patient Gender       | STRING |                       |
|    address    |      Patient Address      | STRING |                       |

#

###### Response Example :

<br>

    {
    "status": "Success",
    "message": "Upload Success",
    "data": {
        "is_active": true,
        "avatar_url": "",
        "_id": "5fe984f21ab55e4b283c4d34",
        "first_name": "RakaK",
        "last_name": "Azhar",
        "email": "raka@gmail.com",
        "password": "$2b$10$Uhp5saHetnZT7tZ4chLOHusrezjz8Mpx81cONmICCILCMDc1tg.Wy",
        "date_of_birth": "1997-11-14T17:00:00.000Z",
        "gender": "Laki-laki",
        "address": "Bekasi",
        "createdAt": "2020-12-28T07:10:42.674Z",
        "updatedAt": "2020-12-28T07:23:38.545Z"
    }
    }

#### POST Login User (Psikiater/Patient)

<br>

    {{baseUrl}}/auth/login

###### BODY raw :

<br>

    {
    "email": "saya_handal@gmail.com",
    "password": "123456"
    }

###### Request Example :

<br>

    request POST {{baseUrl}}/auth/login

    data - raw {
        "email": "saya_handal@gmail.com",
        "password": "123456"
    }

#### Table Info

<br>

|   Name   |        Description        |  Type  |            Notes             |
| :------: | :-----------------------: | :----: | :--------------------------: |
| request  | To accessing our endpoint |  POST  | Login as a Psikiater/Patient |
|  email   |    User Email Address     | STRING |                              |
| password |       User Password       | STRING |                              |

#

###### Response Example :

<br>

    {
    "status": "success",
    "message": "Login successfull.",
    "role": "PSIKIATER",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4"
    }

## 4. Patient

<br>

#### GET Patient By Id

<br>

    {{baseUrl}}/patients/:patient_id

###### HEADERS :

<br>

    accesstoken : Patient Access Token

###### Request Example :

<br>

    request - GET {{baseUrl}}/patients/5fe984f21ab55e4b283c4d34

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

#### Table Info

|    Name     |        Description        | Type |            Notes             |
| :---------: | :-----------------------: | :--: | :--------------------------: |
|   request   | To accessing our endpoint | POST | Login as a Psikiater/Patient |
| accesstoken |   Patient Access Token    | JWT  |                              |

#

###### Response Example :

    {

        "status": "success",
        "message": "Successfully get patients data by id patient.",
        "data": {
            "is_active": true,
            "avatar_url": "",
            "\_id": "5fe984f21ab55e4b283c4d34",
            "first_name": "RakaK",
            "last_name": "Azhar",
            "email": "raka@gmail.com",
            "password": "$2b$10$Uhp5saHetnZT7tZ4chLOHusrezjz8Mpx81cONmICCILCMDc1tg.Wy",
            "date_of_birth": "1997-11-14T17:00:00.000Z",
            "gender": "Laki-laki",
            "address": "Bekasi",
            "createdAt": "2020-12-28T07:10:42.674Z",
            "updatedAt": "2020-12-28T07:10:42.674Z"
        }
    }

#### POST Upload Avatar Patient

<br>

    {{baseUrl}}/patients/upload/:patient_id

###### HEADERS :

<br>

    accesstoken : Patient Access Token

###### BODY form-data :

<br>

    profile_photo, type : File

###### Request Example :

<br>

    request - POST {{baseUrl}}/patients/upload/5fe984f21ab55e4b283c4d34

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

    form - profile_photo=@/C:/Users/rakak/OneDrive/Pictures/Camera Roll/WIN_20200825_16_29_08_Pro.jpg

#### Table Info

<br>

|     Name      |                         Description                          | Type |        Notes         |
| :-----------: | :----------------------------------------------------------: | :--: | :------------------: |
|    request    |                  To accessing our endpoint                   | POST | Upload Photo Patient |
|  accesstoken  |                     Patient Access Token                     | JWT  |                      |
| profile_photo | Patient choose their photo from file directory from their pc | FILE |                      |

#

###### Response Example :

<br>

    {
    "status": "Success",
    "message": "Upload Success",
    "data": {
        "is_active": true,
        "avatar_url": "http://localhost:3030/media/1609140218530-5fe984f21ab55e4b283c4d34-WIN_20200825_16_29_08_Pro.jpg",
        "_id": "5fe984f21ab55e4b283c4d34",
        "first_name": "RakaK",
        "last_name": "Azhar",
        "email": "raka@gmail.com",
        "password": "$2b$10$Uhp5saHetnZT7tZ4chLOHusrezjz8Mpx81cONmICCILCMDc1tg.Wy",
        "date_of_birth": "1997-11-14T17:00:00.000Z",
        "gender": "Laki-laki",
        "address": "Bekasi",
        "createdAt": "2020-12-28T07:10:42.674Z",
        "updatedAt": "2020-12-28T07:23:38.545Z"
    }
    }

## 5. Appointment

<br>

#### POST Create Appointment

<br>

    {{baseUrl}}/appointments

###### HEADERS

<br>

    accesstoken : Patient Access Token

###### BODY raw

<br>

    {
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_date": "2020/12/31",
        "appointment_time": "14:00",
        "complaint": "Sakit hati ditinggal kawin",
        "allergy": ["OBH Combi", "Paracetamol"]
      }

###### Request Example

<br>

    request - POST {{baseUrl}}/appointments

    header accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

    data - raw {
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_date": "2020/12/31",
        "appointment_time": "14:00",
        "complaint": "Sakit hati ditinggal kawin",
        "allergy": ["OBH Combi", "Paracetamol"]
      }

#### Table Info

<br>

| Name             | Descriptions                                                | Type   | Notes                         |
| ---------------- | ----------------------------------------------------------- | ------ | ----------------------------- |
| request          | To accessing our endpoint                                   | POST   | Create Appointment By Patient |
| accesstoken      | Patient Access Token                                        | JWT    |                               |
| psikiater_id     | Which Psikiater That Patient Choose For Appointment         | STRING |                               |
| patient_id       | Which Patient That Create Appointment                       | STRING |                               |
| appointment_date | Choose Date For Appointment                                 | STRING | YYYY/MM/DD                    |
| appointment_time | Choose Time For Appointment                                 | STRING |                               |
| complaint        | The Patient Complaint                                       | STRING |                               |
| allergy          | References for Psikiater When Make Prescription for Patient | STRING |                               |

#

###### Response Example :

<br>

    {
    "status": "Success.",
    "message": "Success create appointment.",
    "data": {
        "diagnose": {
        "diagnose_name": "",
        "diagnose_date": null
        },
        "complaint": "Sakit hati ditinggal kawin",
        "status": "Unpaid",
        "allergy": [
        "OBH Combi",
        "Paracetamol"
        ],
        "_id": "5fe98b2c9994c03ce4b809dd",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_date": "2020-12-30T17:00:00.000Z",
        "appointment_time": "14:00",
        "createdAt": "2020-12-28T07:37:16.170Z",
        "updatedAt": "2020-12-28T07:37:16.170Z"
    }
    }

#### GET Appointment By Id Patient

<br>

    {{baseUrl}}/appointments/patient/:patient_id

###### HEADERS

<br>

    accesstoken : Patient Access Token

###### Request Example

<br>

    request - GET {{baseUrl}}/appointments/patient/5fe984f21ab55e4b283c4d34

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

#### Table Info

<br>

| Name        | Descriptions              | Type | Notes                        |
| ----------- | ------------------------- | ---- | ---------------------------- |
| request     | To accessing our endpoint | GET  | Get Patient Data By Their Id |
| accesstoken | Psikiater Access Token    | JWT  |                              |

#

###### Response Example

    {
    "status": "Success",
    "message": "Success get appointment data.",
    "data": {
        "diagnose": {
        "diagnose_name": "",
        "diagnose_date": null
        },
        "complaint": "Sakit hati ditinggal kawin",
        "status": "Unpaid",
        "allergy": [
        "OBH Combi",
        "Paracetamol"
        ],
        "_id": "5fe98b2c9994c03ce4b809dd",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_date": "2020-12-30T17:00:00.000Z",
        "appointment_time": "14:00",
        "createdAt": "2020-12-28T07:37:16.170Z",
        "updatedAt": "2020-12-28T07:37:16.170Z"
    }
    }

#### GET Appointment By Id Psikiater

<br>

    {{baseUrl}}/appointments/psikiater/:psikiater_id

###### HEADERS

<br>

    accesstoken : Psikiater Access Token

###### Request Example

<br>

    request - GET {{baseUrl}}/appointments/psikiater/5fe5a1efdf84fa2ae85c7861

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

#### Table Info

<br>

| Name        | Descriptions              | Type | Notes                          |
| ----------- | ------------------------- | ---- | ------------------------------ |
| request     | To accessing our endpoint | GET  | Get Psikiater Data By Their Id |
| accesstoken | Patient Access Token      | JWT  |                                |

#

###### Response Example

    {
    "status": "Success",
    "message": "Success get appointment data.",
    "data": {
        "diagnose": {
        "diagnose_name": "",
        "diagnose_date": null
        },
        "complaint": "Sakit hati ditinggal kawin",
        "status": "Unpaid",
        "allergy": [
        "OBH Combi",
        "Paracetamol"
        ],
        "_id": "5fe98b2c9994c03ce4b809dd",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_date": "2020-12-30T17:00:00.000Z",
        "appointment_time": "14:00",
        "createdAt": "2020-12-28T07:37:16.170Z",
        "updatedAt": "2020-12-28T07:37:16.170Z"
    }
    }

#### PATCH Update Diagnose

<br>

    {{baseUrl}}/appointments/diagnose/:patient_id

###### HEADERS

<br>

    accesstoken : Psikiater Access Token

###### BODY raw

<br>

    {
    "diagnose_name": "Patah Hati",
    "diagnose_date": "2020/12/28"
    }

###### Request Example

<br>

    request - PATCH {{baseUrl}}/appointments/diagnose/5fe98b2c9994c03ce4b809dd

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwOTE2MTYyMH0._Xynx-PN3_b1OBa4qWCN2cbMCMg4thnY8tVuzVrs3f0

    data - raw {
        "diagnose_name": "Patah Hati",
        "diagnose_date": "2020/12/28"
    }

#### Table Info

<br>

| Name          | Descriptions                                            | Type   | Notes                          |
| ------------- | ------------------------------------------------------- | ------ | ------------------------------ |
| request       | To accessing our endpoint                               | GET    | Get Psikiater Data By Their Id |
| accesstoken   | Patient Access Token                                    | JWT    |                                |
| diagnose_name | Diagnose From Psikiater for His / Her Patient           | STRING |                                |
| diagnose_date | The Day Psikiater Create Diagnose For His / Her Patient | STRING |                                |

#

###### Response Example

<br>

    {
    "status": "success",
    "message": "Successfully update diagnose data.",
    "data": {
        "diagnose": {
        "diagnose_name": "Patah Hati",
        "diagnose_date": "2020-12-27T17:00:00.000Z"
        },
        "complaint": "Sakit hati ditinggal kawin",
        "status": "Unpaid",
        "allergy": [
        "OBH Combi",
        "Paracetamol"
        ],
        "_id": "5fe98b2c9994c03ce4b809dd",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_date": "2020-12-30T17:00:00.000Z",
        "appointment_time": "14:00",
        "createdAt": "2020-12-28T07:37:16.170Z",
        "updatedAt": "2020-12-28T13:22:40.186Z"
    }
    }

#### PATCH Update Status

<br>

    {{baseUrl}}/appointments/status/:patient_id

###### HEADERS

<br>

    accesstoken : Psikiater/Patient Access Token

###### BODY raw

<br>

    {
        "status": "Paid"
    }

###### Request Example

    request - PATCH {{baseUrl}}/appointments/status/5fe98b2c9994c03ce4b809dd

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwOTE2MTYyMH0._Xynx-PN3_b1OBa4qWCN2cbMCMg4thnY8tVuzVrs3f0

    data - raw {
        "status": "Paid"
    }

#### Table Info

<br>

| Name        | Descriptions              | Type   | Notes                          |
| ----------- | ------------------------- | ------ | ------------------------------ |
| request     | To accessing our endpoint | GET    | Get Psikiater Data By Their Id |
| accesstoken | Patient Access Token      | JWT    |                                |
| status      | Patient Payment Status    | STRING |                                |

#

###### Response Example

<br>

    {
        "message": "not authorize this page"
    }

## 6. Review

<br>

#### POST Create Review

<br>

    {{baseUrl}}/reviews

###### HEADERS

<br>

    accesstoken : Patient Access Token

###### BODY raw

<br>

    {
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_id": "5fe98b2c9994c03ce4b809dd",
        "rating": 4.5,
        "feedback": "Psikiaternya baik"
    }

###### Request Example

<br>

    request - POST {{baseUrl}}/reviews

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

    data - raw {
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_id": "5fe98b2c9994c03ce4b809dd",
        "rating": 4.5,
        "feedback": "Psikiaternya baik"
      }

#### Table Info

<br>

| Name           | Descriptions                                | Type       | Notes                          |
| -------------- | ------------------------------------------- | ---------- | ------------------------------ |
| request        | To accessing our endpoint                   | GET        | Get Psikiater Data By Their Id |
| accesstoken    | Patient Access Token                        | JWT        |                                |
| psikaiter_id   | Psikiater That Want To Be Review by Patient | STRING     |                                |
| patient_id     | Patient That Give Review To Psikiater       | STRING     |                                |
| appointment_id | Appointments that Being Reviewed            | STRING     |                                |
| rating         | Rating From Patient for Psikiater           | DECIMAL128 |                                |
| feedback       | Feedback From Patient for Psikiater         | STRING     |                                |

#

###### Response Example

<br>

    {
    "status": "Success.",
    "message": "Success add review.",
    "data": {
        "_id": "5fe98d7760fa1a1fa0be953c",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_id": "5fe98b2c9994c03ce4b809dd",
        "rating": {
        "$numberDecimal": "4.5"
        },
        "feedback": "Psikiaternya baik",
        "createdAt": "2020-12-28T07:47:03.991Z",
        "updatedAt": "2020-12-28T07:47:03.991Z"
    }
    }

#### GET Review By Psikiater Id

<br>

    {{baseUrl}}/reviews/psikiater/:psikiater_id

###### HEADERS

<br>

    accesstoken : Patient Access Token

###### Request Example

<br>

    request - GET {{baseUrl}}/reviews/psikiater/5fe5a1efdf84fa2ae85c7861

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

#### Table Info

<br>

| Name        | Descriptions              | Type | Notes                            |
| ----------- | ------------------------- | ---- | -------------------------------- |
| request     | To accessing our endpoint | GET  | Get Psikiater Review By Their Id |
| accesstoken | Patient Access Token      | JWT  |                                  |

#

###### Response Example

<br>

    {
    "status": "Success.",
    "message": "Successfully get review data.",
    "data": [
        {
        "_id": "5fe98d7760fa1a1fa0be953c",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_id": "5fe98b2c9994c03ce4b809dd",
        "rating": {
            "$numberDecimal": "4.5"
        },
        "feedback": "Psikiaternya baik",
        "createdAt": "2020-12-28T07:47:03.991Z",
        "updatedAt": "2020-12-28T07:47:03.991Z"
        }
    ]
    }

#### GET Review By Patient Id

<br>

    {{baseUrl}}/reviews/patient/:patient_id

###### HEADERS

<br>

    accesstoken : Patient Access Token

###### Requenst Example

<br>

    request - GET {{baseUrl}}/reviews/psikiater/5fe5a1efdf84fa2ae85c7861

    header - accesstoken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlOTg0ZjIxYWI1NWU0YjI4M2M0ZDM0Iiwicm9sZSI6IlBBVElFTlQiLCJpYXQiOjE2MDkxMzk0NDJ9.ojGF_22xjb9gtruTL7eldb5oag9rFk5PVhcTgku_f2g

#### Table Info

<br>

| Name        | Descriptions              | Type | Notes                              |
| ----------- | ------------------------- | ---- | ---------------------------------- |
| request     | To accessing our endpoint | GET  | Get Psikiater Review By Patient Id |
| accesstoken | Patient Access Token      | JWT  |                                    |

#

###### Response Example

<br>

    {
    "status": "Success.",
    "message": "Successfully get review data.",
    "data": [
        {
        "_id": "5fe98d7760fa1a1fa0be953c",
        "psikiater_id": "5fe5a1efdf84fa2ae85c7861",
        "patient_id": "5fe984f21ab55e4b283c4d34",
        "appointment_id": "5fe98b2c9994c03ce4b809dd",
        "rating": {
            "$numberDecimal": "4.5"
        },
        "feedback": "Psikiaternya baik",
        "createdAt": "2020-12-28T07:47:03.991Z",
        "updatedAt": "2020-12-28T07:47:03.991Z"
        }
    ]
    }

## 7. Other :

<br>

#### GET Access Media :

<br>

    http://localhost:3030/media/:photo_url_that_we_upload

###### HEADERS :

<br>

    accesstoken : Psikiater Access Token

###### Request Example :

<br>

    request - GET 'http://localhost:3030/media/1608885361721-5fe5a1efdf84fa2ae85c7861-0.jpg'

    header - accesstoken : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZlNWExZWZkZjg0ZmEyYWU4NWM3ODYxIiwicm9sZSI6IlBTSUtJQVRFUiIsImlhdCI6MTYwODg4NDkwOX0.akQ7lx4ZXca06yzZdCZWD9Omm0u2lrhbkJIdg74Q0V4

#### Table Info

<br>

|    Name     |        Description        | Type | Notes |
| :---------: | :-----------------------: | :--: | :---: |
|   request   | To accessing our endpoint | GET  |       |
| accesstoken |  Psikiater Access Token   | JWT  |       |

#

###### Response Example

<br>

**Psikiater Will Get Photo**
