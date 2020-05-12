sfdx shane:org:create -f config/project-scratch-def.json -s -d 1 --userprefix dev --userdomain citi.demo
sfdx force:source:push
sfdx force:user:permset:assign --permsetname citipermissionset
sfdx force:data:tree:import --plan sfdx-out/export-demo-Account-plan.json
sfdx shane:user:password:set -p sfdx1234 -g User -l User
sfdx force:org:open