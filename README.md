# What is it
Bulletins is a weekly retrospective tool for multiple projects or teams. It lets people reflect on their past week with 4 questions which can be answered super quickly:
- What's the team mood?
- What were the main goals this week?
- What worked great and what was harder?
- Do we need help?

It's asynchronous and transparent at its heart. All teams can fill their retrospective when they want through a simple web interface, as long as it's before Friday 3 PM. On Fridays at 3 PM, everyone gets a weekly recap email with all filled retrospectives. The web interface lets everyone browse through previous retrospectives by week or by team.

## Features
Bulletins is opinionated on a few things. Here are some principles:
- Retrospectives should be quick. The form has a select and 3 text inputs. Each text input is limited to 300 characters (a bit more than a tweet). Filling a retrospective for a team takes less than 5 minutes per week.
- We don't provide an authentication system. It should be deployed internally or can be secured with something like HTTP Auth Basic.
- Transparency is important. When teams fill their retrospective, it can be read by all other teams. Everyone who has access to the application can browse through previous retrospectives and export them in CSV.
- Teams are free to fill their weekly retrospective when they want between Sunday midnight and Friday 3PM.
- Teams are reminded to fill their weekly retrospective in various ways:
    - a collective Slack reminder on a channel you can define on Fridays at 10 AM
    - by DM on Slack to each member of a team if the retrospective of the team has not be filled yet on Fridays at 2 PM and 2:45 PM
- At 3 PM every Friday, all filled weekly retrospectives are sent to an email address, typically a mailing list where every member of the team can be reached.
- Previous retrospectives can be seen on the web interface after authenticating with a password you can define. You can define a password hint to help people remember the password.
- Each team can share a unique URL which lets anyone see all previous retrospectives of a specific team. It's useful when working with outside people or clients for example.
