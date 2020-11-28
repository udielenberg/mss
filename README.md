# Instructions

1. run `docker-compose up`
2. run `yarn start`
3. Microservices are all running!

---

## Requirments

https://nodejs-microservices.netlify.app/23

---

## Add GeoLocation endpoints:

Add new location

**URL**: http://localhost:3001/location/new

**Method**: POST

**body**:

```typescript
{
  "userId": number;
  "timestamp": number;
  "geometry": {
    "coordinates": [number, number];
    "type": "Point";
  }
}
```

---

## Web service endpoints:

Get all locations

**URL**: http://localhost:3003/locations

**Method**: GET

---

Get location by userId

**URL**: http://localhost:3003/locations/:userId

**Method**: GET

---

Get sorted locations by popularity

**URL**: http://localhost:3003/locations/popular

**Method**: GET

---

Get locations near a user by max distance

**URL**: http://localhost:3003/locations/near/?userId=4&maxDistance=1700000

**Method**: GET

**query params:**

```typescript
userId: number;
maxDistance: number;
```
