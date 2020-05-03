import React, { useEffect, useState } from "react";
import { ShopCard } from "../components/ShopCard";
import { useHistory, useLocation } from "react-router-dom";

const supportedLocations = [
  "ontario_toronto_upperjarvis",
  "ontario_northumberland",
  "ontario_ottawa_nepean",
  "bc_vancouver_oakridge",
  "ontario_mississauga_streetsville",
  "ontario_mississauga_meadowvale",
  "downtownottawa",
  "glebe",
  "hintonburg",
  "sandyhill",
  "downtowntoronto",
  "eastyork",
  "northyork",
  "hamilton",
  "barrhaven",
  "beechwood",
  "kanata",
  "orleans",
  "southkeys",
  "westboro",
  "littleportugaltoronto",
  "ontario_burlington",
  "ontario_kingston",
  "hastingssunrise",
  "bc_whiterocksouthsurrey",
  "ontario_peterborough",
  "ontario_hamilton_waterdown",
  "bc_vancouver_champlainheights",
  "ontario_waterloo",
  "ontario_toronto_annex",
  "ontario_toronto_scarboroughvillage",
  "ontario_ottawa_gloucester",
  "ontario_ottawa_altavista",
  "ontario_ottawa_vanier",
  "ontario_ottawa_trainyards",
  "ontario_ottawa_bellscorners",
  "ontario_ottawa_manotick",
  "ontario_cornwall",
  "ontario_ancaster",
  "ontario_simcoe"
];

export function Main() {
  const [shops, updateShops] = useState(null);
  const { search } = useLocation();
  const history = useHistory();
  const params =
    search.length &&
    search
      .replace("?", "")
      .split("&")
      .map(param => param.split("="));

  const locationParam =
    params.length > 0 ? params.filter(x => x[0] === "location")[0][1] : null;

  const supportedLocation = supportedLocations.includes(locationParam);
  const [location, updateLocation] = useState(
    supportedLocation ? locationParam : "downtownottawa"
  );

  useEffect(() => {
    async function getData(location) {
      await fetch(`./data/${location}.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          updateShops(data);
        });
    }

    if (location.length > 1) {
      getData(location);
      history.push({ search: `?location=${location}` });
    }
  }, [location, history]);

  return (
    <>
      <div className="intro">
        <p>
        Stay safe and avoid large crowds with help from fellow grocery shoppers.{" "}
          <strong>
            Make sure to check directly with stores about their hours before
            venturing out.
          </strong>
        </p>
      </div>

      <div className="innerContainer">
        <div className="selectContainer">
          <label>
            Choose a location:
            <select
              id="city"
              onChange={event => updateLocation(event.target.value)}
              value={location}
            >
              <option disabled value="">
                --Please choose a location--
              </option>
              <option value="ontario_ottawa_altavista">
                Sydney - Bondi Junction
              </option>
              <option value="barrhaven">Ottawa - Barrhaven</option>
              <option value="beechwood">Ottawa - Beechwood</option>
              <option value="ontario_ottawa_bellscorners">
                Canberra - City Centre
              </option>
              <option value="downtownottawa">Ottawa - Centretown</option>
              <option value="glebe">Ottawa - Glebe</option>
              <option value="ontario_ottawa_gloucester">
                Canberra - Gungahlin
              </option>
              <option value="hintonburg">Canberra - Fyshwick</option>
              <option value="kanata">Canberra - Woden</option>
              <option value="ontario_ottawa_manotick">Canberra - Belconnen</option>
              <option value="ontario_ottawa_nepean">Sydney - City Centre</option>
              <option value="orleans">Ottawa - Orleans</option>
              <option value="sandyhill">Ottawa - Sandy Hill</option>
              <option value="southkeys">Ottawa - South Keys</option>
              <option value="ontario_ottawa_trainyards">
                Ottawa - Train Yards
              </option>
              <option value="ontario_ottawa_vanier">Ottawa - Vanier</option>
              <option value="westboro">Ottawa - Westboro</option>
              <option value="ontario_toronto_annex">Toronto - Annex</option>
              <option value="downtowntoronto">Toronto - Downtown</option>
              <option value="eastyork">Toronto - East York</option>
              <option value="littleportugaltoronto">
                Toronto - Little Portugal
              </option>
              <option value="northyork">Toronto - North York</option>
              <option value="ontario_toronto_scarboroughvillage">
                Toronto - Scarborough Village
              </option>
              <option value="ontario_toronto_upperjarvis">
                Toronto - Upper Jarvis
              </option>
              <option value="ontario_ancaster">Ancaster</option>
              <option value="ontario_burlington">Burlington</option>
              <option value="ontario_northumberland">
                Cobourg - Northumberland
              </option>
              <option value="ontario_cornwall">Cornwall</option>
              <option value="hamilton">Hamilton - Downtown</option>
              <option value="ontario_hamilton_waterdown">
                Hamilton - Waterdown
              </option>
              <option value="ontario_kingston">Kingston</option>
              <option value="ontario_mississauga_meadowvale">
                Mississauga - Meadowvale
              </option>
              <option value="ontario_mississauga_streetsville">
                Mississauga - Streetsville
              </option>
              <option value="ontario_peterborough">Peterborough</option>
              <option value="ontario_simcoe">Simcoe</option>
              <option value="ontario_waterloo">Waterloo</option>
              <option value="hastingssunrise">
                Vancouver - Hastings-Sunrise
              </option>
              <option value="bc_vancouver_oakridge">
                Vancouver - Oakridge
              </option>
              <option value="bc_vancouver_champlainheights">
                Vancouver - Champlain Heights
              </option>
              <option value="bc_whiterocksouthsurrey">
                White Rock/South Surrey
              </option>
            </select>
          </label>
        </div>

        <div className="legendContainer" style={{backgroundColor: 'rgb(248,248,248)', padding:'10px', borderRadius: '7px'}}>
        <strong style={{textAlign: 'justify'}}>Legend:</strong>
          <div className="legend" />
          <div className="legendLabel">
            <span className="left">Closed or not enough data</span>
            <span className="right">As busy as the shop gets</span>
          </div>
        </div>

        {shops == null
          ? null
          : shops.map(({ id, populartimes, name, address }) => {
              return (
                <ShopCard
                  key={id}
                  popularTimes={populartimes}
                  name={name}
                  address={address}
                />
              );
            })}
      </div>
    </>
  );
}
