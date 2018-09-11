# Node-todo chart

## Deploy
To install the chart and give `my-todo` as the release name: 
```
helm install --name my-todo node-todo
```
## Delete
To delete the deploy with the release name `my-todo`:
```
helm del --purge my-todo
```
## Configuration
The parameters could be specified with the flag `--set key=value,key.other=value` at the moment of `helm install` or `helm upgrade`.
Example:
```
helm install --name  my-todo \
  --set replicaCount=2 \
  node-todo 
```
The above would deploy a 2 replica node-todo instance.

Also all of the configuration could be changed rewriting the values of the `values.yaml` file.

