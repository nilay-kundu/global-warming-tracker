  # Ecosphere

  ## Ecosphere is a web app to provide information on ecological information of the world on a country-by-country basis. This includes temperature, CO2 emissions, and ecological diversity data.
   **Setup** - Run the following CLI command: 
   ```
   npm start
   ```


*Potential Tech Stacks:*
1. 3D Globe and Country Selection
- CesiumJS or Three.js – for rendering a 3D globe
- GeoJSON – for country boundaries and selection

2. Climate & Environmental Data APIs
- NASA GISS – for temperature records
- **World Bank Climate Data** – for temperature and environmental indicators
- **NOAA Climate API** – for climate and CO2 data
- **Global Carbon Atlas API** – for CO2 output over time
- Global Forest Watch API or FAO Forestry Data – for tree density and deforestation rates
- **UNEP-WCMC Biodiversity API** – for ecological diversity and species data

3. Chatbot for Q&A on Environmental Issues
- OpenAI API (GPT-4) – for generating answers based on global warming and conservation data
- LangChain – to integrate with a structured knowledge base
- Neo4j – if you want to model relationships between environmental factors and country-specific struggles
