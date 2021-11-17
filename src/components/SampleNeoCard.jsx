const SampleNeo = [
  {
    links: {
      self: 'http://www.neowsapp.com/rest/v1/neo/2138404?api_key=us2MndB2OwcMCT887aznbmPtSzxIs5FydFkRGnNy',
    },
    id: '2138404',
    neo_reference_id: '2138404',
    name: '138404 (2000 HA24)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2138404',
    absolute_magnitude_h: 19.18,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.3877528304,
        estimated_diameter_max: 0.8670416872,
      },
      meters: {
        estimated_diameter_min: 387.7528303812,
        estimated_diameter_max: 867.0416872003,
      },
      miles: {
        estimated_diameter_min: 0.240938364,
        estimated_diameter_max: 0.5387545602,
      },
      feet: {
        estimated_diameter_min: 1272.1549960278,
        estimated_diameter_max: 2844.6250490342,
      },
    },
    is_potentially_hazardous_asteroid: true,
    close_approach_data: [
      {
        close_approach_date: '2021-09-20',
        close_approach_date_full: '2021-Sep-20 03:30',
        epoch_date_close_approach: 1632108600000,
        relative_velocity: {
          kilometers_per_second: '13.1438411832',
          kilometers_per_hour: '47317.8282596186',
          miles_per_hour: '29401.4583427614',
        },
        miss_distance: {
          astronomical: '0.1467214655',
          lunar: '57.0746500795',
          kilometers: '21949218.722078485',
          miles: '13638612.083053693',
        },
        orbiting_body: 'Earth',
      },
    ],
    is_sentry_object: false,
  },
];

export default SampleNeo;
