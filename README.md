# Tapp Web Client

### Installation
```
npm install -g webpack webpack-dev-server
npm install
```

### Serving locally
For local setup:
```
git clone
cd ekaltz-web_client
npm install
npm start
```

#### Backend API
The web client is listening for the API on port 3000

## Testing
To test, run `$ npm test`.

## BrightWolf API
We are using BrightWolf to give us our sensor data from the kegs themselves. We specifically make a `GET` to `http://bw-c2230-002.bright-wolf.net/api/organizations`. After that, two more requests are made to access the data:

- We get the data from the first request and using that data, make a request to `http://bw-c2230-002.bright-wolf.net/api/sensors?org_id=[id]`
- Then using the data in the last request, we make another request to `http://bw-c2230-002.bright-wolf.net/api/sensors/history?sensor_id=[id]&from=[date]`

With that data, we will now have access to the sensor history.

### Contributing
https://medium.com/@zacharykuhn/a-gentle-intro-to-react-part-1-82ef6b16973c
