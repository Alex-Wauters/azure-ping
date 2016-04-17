# azure-ping
Webjob for Azure App Services which pings your website every 5 minutes

Azure's AlwaysOn setting was broken in the month of April 2016. As a work-around, you can add this webjob which sends a HTTP GET to the root page of the App Service every 5 minutes.

To create the webjob, open the App Service in the Azure Portal.
In settings, scroll down to Web Jobs.

Create a new On Demand webjob, and attach ping.zip.
Even though it is an on demand web job, it will run automatically every 5 minutes. 

## Frequency
To modify the frequency, you can modify settings.job. The file uses the [Cron scheduling format](https://en.wikipedia.org/wiki/Cron) .
        "schedule": "0 */5 * * * *"
Example: replace /5 with /1 to send a request every minute.