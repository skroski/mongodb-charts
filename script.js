import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-wilson-lfjae'
})

const chart = sdk.createChart({
    chartId: '473895bf-df2f-48ac-ba7f-20c4e564c97f',
    height: '400px',
    theme: 'dark'
});

const chart2 = sdk.createChart({
    chartId: 'd8fd8842-238e-4c0c-8525-802e3eb25731',
    height: '400px',
    theme: 'dark'
});

// render the chart into a container
chart
  .render(document.getElementById('chart'))
  .catch(() => window.alert('Chart failed to initialise'));
chart2
  .render(document.getElementById('chart2'))
  .catch(() => window.alert('Chart failed to initialise 2'));
