import React from 'react';

const FavoritesRoutesTable = () => (
  <div id="login" className="ui center aligned grid">
    <div className="twelve wide column">
      <table className="ui padded very basic six column table">
        <thead>
          <tr>
            <th>Upload date</th>
            <th>From</th>
            <th>To</th>
            <th className="center aligned">Bus stops count</th>
            <th className="center aligned">Time in travel</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="favorite-route-row">
            <td>16-03-2017 15:44:10</td>
            <td>Фолюш</td>
            <td>Алми</td>
            <td className="center aligned">3</td>
            <td className="center aligned">20 min</td>
            <td>
              <i className="icon large green checkmark" /> Actual
              <i className="float-right link icon red remove" />
            </td>
          </tr>
          <tr>
            <td>31-03-2017 12:23:21</td>
            <td>Фолюш</td>
            <td>Улица Советская</td>
            <td className="center aligned">4</td>
            <td className="center aligned">20 min</td>
            <td>
              <i className="icon large blue wait" /> Need to rebuild
              <i className="float-right link icon red remove" />
            </td>
          </tr>
          <tr>
            <td>07-03-2017 13:33:14</td>
            <td>Алми</td>
            <td>Фолюш</td>
            <td className="center aligned">7</td>
            <td className="center aligned">20 min</td>
            <td>
              <i className="icon large red ban" /> Can't build this route
              <i className="float-right link icon red remove" />
            </td>
          </tr>
          <tr>
            <td>01-03-2017 04:48:46</td>
            <td>Улица Янки Купалы</td>
            <td>Улица Поповича</td>
            <td className="center aligned">2</td>
            <td className="center aligned">20 min</td>
            <td>
              <i className="icon large green checkmark" /> Actual
              <i className="float-right link icon red remove" />
            </td>
          </tr>
          <tr>
            <td>15-03-2017 12:59:33</td>
            <td>Улица Поповича</td>
            <td>Улица Янки Купалы</td>
            <td className="center aligned">5</td>
            <td className="center aligned">20 min</td>
            <td>
              <i className="icon large blue wait" /> Need to rebuild
              <i className="float-right link icon red remove" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FavoritesRoutesTable;
