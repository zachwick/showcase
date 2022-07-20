# Adding MinIO to the project's Blueprint Spec

- following the Quickstart at https://render.com/docs/deploy-minio
    - for this particular use case, being able to quickly see the Blueprint Spec excerpt for minIO would be most useful

Steps to complete:

1. Navigate to minio quickstart
2. find a link to the render-examples repo
3. view the `render.yaml`
4. fork the render-examples/minio repo to a private repo
5. copy the relevant section of the render-examples `render.yaml` to my project's `render.yaml`
6. check the Render docs for what port is public and which is private
    1. modify my `render.yaml` as appropriate
7. add a `repo` line to my `render.yaml` for the new minio instance
8. commit and push the change to my repo to trigger a Blueprent sync (?)
9. navigate to Render dashboard to generate/see minio credentials

renamed `master` branch to `main`

What is called the "MinIO Console" in the Render docs is really the web UI - this was confusing and made me have to
fiddle with which MinIO service was exposed publicly via Render one time too many. (first thinking I needed to expose
the API instead of console, and then once I realized my mistake)

In order to load the video asset from the MinIO bucket in a `<video>` element, had to convert it from a `.mov` to
an `.mp4` using `ffmpeg -i my-video.mov -vcodec h264 -acodec mp2 my-video.mp4`

