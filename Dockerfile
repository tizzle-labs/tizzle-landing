# Menggunakan Nginx untuk serve static files
FROM nginx:alpine

# Copy file HTML ke direktori Nginx
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
