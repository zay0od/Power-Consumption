# 🚀 Electrical Power Consumption App 

🏆 Winner of 1st place at Dubai GITEX Hackathon!

⚡️ Our app, designed for Hackmasters, analyzes electrical power consumption data and displays it on an intuitive web UI.

🌐 Leveraging OpenAI ChatGPT API, we offer smart solutions to reduce power consumption and enhance energy efficiency.




## Setup

1. Clone this repository and navigate into the project directory

    ```shell
    git clone https://github.com/zay0od/Power-Consumption.git
    cd Power-Consumption
    ```

2. Using `pnpm` to install dependencies
  
    ```shell
    pnpm install
    ```

3. Create the `.env` file to store your OpenAI API key and Orgnaization ID

    ```shell
    touch .env
    ```

4. Add your OpenAI API key and Orgnaization ID to the `.env` file

    ```shell
    # Example
    VITE_OPEN_API_KEY=xxxxxxxx
    VITE_ORG_ID=org-xxxxxxx
    ```

5. Run the development server, and open [http://localhost:5173](http://localhost:5173) in your browser

    ```shell
    pnpm dev
    ```

6. Build the project for production

    ```shell
    pnpm build
    ```
