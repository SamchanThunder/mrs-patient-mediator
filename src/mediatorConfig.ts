export const mediatorConfig = {
  urn: "urn:mediator:mrs_patient_mediator",
  version: "1.0.0",
  name: "MRS Patient Mediator",
  description: "Posts Patient from OpenMRS to OpenHIM on creation/update",
  defaultChannelConfig: [
    {
      name: "MRS Patient Mediator",
      urlPattern: '^/mrsmediator/.*$',
      routes: [
        {
          name: "MRS Patient Mediator Route",
          host: "mrsmediator",
          pathTransform: 's/\\/mrsmediator/',
          port: "7050",
          primary: true,
          type: "http"
        }
      ],
      allow: ["interop"],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      type: "http"
    }
  ],
  endpoints: [
    {
      name: "MRS Patient Mediator Endpoint",
      host: "mrsmediator",
      path: "/",
      port: "7050",
      primary: true,
      type: "http"
    }
  ]
};