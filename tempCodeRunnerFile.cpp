#include <iostream>
#include <vector>
#include <numeric> // for std::lcm
using namespace std;

int main() {
    int t;
    cin >> t; // number of test cases
    
    while (t--) {
        int n;
        cin >> n; // number of signs
        
        vector<int> periodicities(n);
        for (int i = 0; i < n; ++i) {
            cin >> periodicities[i]; // periodicities of signs
        }
        
        // Calculate the least common multiple (LCM) of all the periodicities
        long long lcm_periodicity = accumulate(periodicities.begin(), periodicities.end(), 1LL, lcm<int, long long>);
        
        // Find the year where the last sign occurs within the LCM interval
        long long last_sign_year = (lcm_periodicity / periodicities[n - 1]) * periodicities[n - 1];
        
        cout << last_sign_year << endl;
    }
    
    return 0;
}
