
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			}
		},
		extend: {
			fontFamily: {
				sans: ['Boldonse', 'sans-serif'],
				boldonse: ['Boldonse', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				portfolio: {
					navy: {
						DEFAULT: 'hsl(var(--portfolio-navy))',    // Navy Blue #1E3A8A
						50: '#f0f4ff',
						100: '#dbe4ff',
						900: '#1e3a8a',
					},
					indigo: {
						DEFAULT: 'hsl(var(--portfolio-indigo))',  // Indigo #3B82F6
						50: '#eff6ff',
						100: '#dbeafe',
						500: '#3b82f6',
					},
					sky: {
						DEFAULT: 'hsl(var(--portfolio-sky))',     // Sky Blue #60A5FA
						50: '#f0f9ff',
						100: '#e0f2fe',
						400: '#60a5fa',
					},
					light: {
						DEFAULT: 'hsl(var(--portfolio-light))',  // Light Blue #BFDBFE
						200: '#bfdbfe',
						300: '#93c5fd',
					}
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)' },
					'50%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.7)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
				'float': 'float 3s infinite ease-in-out',
				'glow': 'glow 2s infinite ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
