# 📘 README: kubectl Commands Cheat Sheet

This README provides a comprehensive cheat sheet for `kubectl` — the command-line tool used to interact with Kubernetes clusters. It is designed for developers and DevOps engineers to manage and troubleshoot Kubernetes resources efficiently.

---

## 🔧 Cluster Management

### Get cluster info
```bash
kubectl cluster-info
```
> Displays master and service endpoints.

### View all nodes in the cluster
```bash
kubectl get nodes
```
> Lists all cluster nodes.

### View details of a node
```bash
kubectl describe node <node-name>
```
> Provides detailed info about a node.

---

## 📦 Namespace Management

### List all namespaces
```bash
kubectl get namespaces
```

### Create a namespace
```bash
kubectl create namespace <namespace>
```

### Delete a namespace
```bash
kubectl delete namespace <namespace>
```

---

## 🛠️ Workloads (Pods, Deployments, etc.)

### Get all resources in all namespaces
```bash
kubectl get all --all-namespaces
```

### Get all pods in a namespace
```bash
kubectl get pods -n <namespace>
```

### Describe a specific pod
```bash
kubectl describe pod <pod-name> -n <namespace>
```

### Get logs of a pod
```bash
kubectl logs <pod-name> -n <namespace>
```

### Get logs of a specific container in a pod
```bash
kubectl logs <pod-name> -c <container-name> -n <namespace>
```

### Follow pod logs (live)
```bash
kubectl logs -f <pod-name> -n <namespace>
```

### Exec into a running pod
```bash
kubectl exec -it <pod-name> -n <namespace> -- /bin/bash
```
> Use `/bin/sh` if bash isn't available.

---

## 🚀 Deployments and Services

### List deployments
```bash
kubectl get deployments -n <namespace>
```

### Create a deployment
```bash
kubectl create deployment <name> --image=<image> -n <namespace>
```

### Scale a deployment
```bash
kubectl scale deployment <name> --replicas=<count> -n <namespace>
```

### Delete a deployment
```bash
kubectl delete deployment <name> -n <namespace>
```

### List services
```bash
kubectl get svc -n <namespace>
```

### Expose a deployment as a service
```bash
kubectl expose deployment <name> --type=NodePort --port=<port> -n <namespace>
```

---

## 🚀 ReplicaSet

### List deployments
```bash
kubectl get replicaset
```

### Describe a specific replicaset
```bash
kubectl describe replicaset <replicaset-name>
```

### Create a replicaset
```bash
kubectl create replicaset <name> --image=<image>
```

```bash
kubectl create -f <replicaset-yml path>
```

---

## 🌐 Ingress and Networking

### List all ingresses
```bash
kubectl get ingress -A
```

### Describe an ingress
```bash
kubectl describe ingress <ingress-name> -n <namespace>
```

---

## 🔁 Port Forwarding

### Forward local port to a pod/service
```bash
kubectl port-forward svc/<service-name> <local-port>:<target-port> -n <namespace>
```

### Example:
```bash
kubectl port-forward svc/my-grafana 3000:80 -n monitoring
```

---

## 📂 Config and Context

### View current context
```bash
kubectl config current-context
```

### List all contexts
```bash
kubectl config get-contexts
```

### Switch context
```bash
kubectl config use-context <context-name>
```

### View all configuration
```bash
kubectl config view
```

---

## 🔍 Troubleshooting

### Get events in a namespace
```bash
kubectl get events -n <namespace>
```

### Describe a service, pod, etc.
```bash
kubectl describe <resource-type> <name> -n <namespace>
```

### Check resource usage
```bash
kubectl top pod -n <namespace>
kubectl top node
```

---

## 📜 YAML and Manifests

### Apply a YAML file
```bash
kubectl apply -f <file.yaml>
```

### Delete resources from a YAML file
```bash
kubectl delete -f <file.yaml>
```

### Dry-run for testing YAML
```bash
kubectl apply -f <file.yaml> --dry-run=client
```

---

## ⚙️ Miscellaneous

### Get all resource types
```bash
kubectl api-resources
```

### Explain a resource type
```bash
kubectl explain <resource>
```
> Example: `kubectl explain pod`

### Version check
```bash
kubectl version --short
```

---

## 📌 Notes
- Replace placeholders like `<namespace>`, `<pod-name>`, `<service-name>` with actual names.
- Use `-A` instead of `--all-namespaces` if you prefer short flags.
- Combine with `watch` to live monitor (e.g., `watch kubectl get pods -A`).

Let me know if you want to include Helm, CRDs, or metrics-related commands!
